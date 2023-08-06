const router = require("express").Router();
const company = require("../models/company");
const cryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

// register company
router.post("/register", async (req, res) => {
    const newCompany = new company({
        companyname: req.body.companyname,
        companyemail: req.body.companyemail,
        companyspecialisation: req.body.companyspecialisation,
        companypassword: cryptoJS.AES.encrypt(
        req.body.companypassword,
        process.env.SECRET_KEY
      ).toString(),
    });
    try {
      const Company = await newCompany.save();
      res.status(201).json(Company);
    } catch (err) {
      res.status(500).json(err);
    }
});

// login company
router.post('/login', async (req, res) => {
    try{
        let Company = await company.find({companyemail: req.body.companyemail});
        if(!Company){
          res.status(401).json('email is invalid');
          return;
        }
        Company = Company[0];
        const originalPassword = cryptoJS.AES.decrypt(Company.companypassword, process.env.SECRET_KEY).toString(cryptoJS.enc.Utf8);
        if(originalPassword != req.body.companypassword){
            res.status(401).json('wrong password');
            return;
        }
        const accessToken = jwt.sign({id: Company._id, isCompany: Company.isCompany}, process.env.SECRET_KEY, {expiresIn: '9d'})
        const {password, ...info} = Company._doc;
        res.status(200).json({...info, accessToken});
   }catch(err){
    res.status(500).json(err);
   }
});

module.exports = router;