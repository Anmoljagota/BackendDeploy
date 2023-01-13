const express = require("express");
const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");
const { LoginModel } = require("../Models/AuthModel");
const LoginRoute = express.Router();
LoginRoute.post("/", async (req, res) => {
  const { email, password } = req.body;
  const check = await LoginModel.find({ email });
  console.log("check", check);
  try {
    if (check.length > 0) {
      bycrypt.compare(password, check[0].password, (err, result) => {
        if (result) {
          let token = jwt.sign({ userId: check[0]._id }, "loginuser");
          res.send(token);
        } else {
          res.send("wrong credentials");
        }
      });
    } else {
      res.send("wrong credentials");
    }
  } catch (err) {
    res.send(`error:${err}`);
  }
});

module.exports = {
  LoginRoute,
};
