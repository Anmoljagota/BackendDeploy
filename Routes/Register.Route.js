const express = require("express");
const { LoginModel } = require("../Models/AuthModel");
const bycrypt = require("bcrypt");
const RegisterRoute = express.Router();
RegisterRoute.post("/", async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;
  try {
    bycrypt.hash(password, 6, async (err, hash) => {
      const registerData = new LoginModel({
        name,
        email,
        password: hash,
        phoneNumber,
      });
      await registerData.save();
      res.send("Registered");
    });
  } catch (err) {
    res.send(`error:${err}`);
  }
});
module.exports = {
  RegisterRoute,
};
