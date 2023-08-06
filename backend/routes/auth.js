const router = require("express").Router();
const user = require("../models/user");
const cryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

// register user
router.post("/register", async (req, res) => {
  if (req.body.username != "" && req.body.email != "") {
    const newUser = new user({
      username: req.body.username,
      email: req.body.email,
      password: cryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });
    try {
      const User = await newUser.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }else{
  }
});


// login user
router.post('/login', async (req, res) => {
    try{
        let User = await user.find({email: req.body.email});
        if(!User){
            res.status(401).json('email is invalid');
            throw 'not user';
        }
        User = User[0];
        const originalPassword = cryptoJS.AES.decrypt(User.password, process.env.SECRET_KEY).toString(cryptoJS.enc.Utf8);
        if(originalPassword != req.body.password){
          res.status(401).json('wrong password');
          return;
        }
        const accessToken = jwt.sign({id: User._id, isCompany: User.isCompany}, process.env.SECRET_KEY, {expiresIn: '5d'})
        const {password, ...info} = User._doc;
        res.status(200).json({...info, accessToken});
   }catch(err){
    res.status(500).json(err);
   }
});

module.exports = router;