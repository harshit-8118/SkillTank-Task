const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const authRoute = require("./routes/auth");
const companyAuth = require("./routes/companyAuth");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*",
    credentials: true,
    maxAge: 86400,
  })
);

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/company", companyAuth);

app.listen(process.env.PORT, () => {
  console.log("backend server is running");
});
