const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const UserModal = require("../Modal/user.modal");

const AdminModal = require("../Modal/admin.modal");
const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  const { fname, email, password } = req.body;
  const existingEmail = await UserModal.findOne({ email });
  if (existingEmail) {
    res.send("User Already Exist");
  } else {
    bcrypt.hash(password, 5, function (err, hash) {
      if (email.includes("@masaischool.com")) {
        AdminModal.insertMany({ fname, email, password: hash });
      } else {
        UserModal.insertMany({ fname, email, password: hash });
      }
    });
    res.send({ msg: "Signup Successfull" });
  }
});
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let hashedPassword;
  if (email.includes("@masaischool.com")) {
    hashedPassword = await AdminModal.findOne({ email });
  } else {
    hashedPassword = await UserModal.findOne({ email });
  }

  bcrypt.compare(password, hashedPassword.password, function (err, result) {
    if (result) {
      var token = jwt.sign({ email: email }, "shhhhh");
      res.send({ msg: "Login Successful", token: token });
    } else {
      res.send({ msg: "Login Failed" });
    }
  });
});

module.exports = userRouter;
