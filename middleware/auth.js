const express = require("express");

var jwt = require("jsonwebtoken");
const AdminModal = require("../Modal/admin.modal");
const UserModal = require("../Modal/user.modal");

const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  try {
    var decoded = jwt.verify(token, "shhhhh");

    // const { email } = decoded;
    // if (email.includes("@masaischool.com")) {
    //   const Data = await AdminModal.findOne({ email });

    // } else {
    //   const Data = await UserModal.findOne({ email });

    // }

    console.log("auth completed");
    next();
    // res.send("Logged In");
  } catch (err) {
    console.log(err);
    res.send("Please log");
  }
};

module.exports = { auth };
