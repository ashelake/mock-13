const { Router } = require("express");
const express = require("express");
const { auth } = require("../middleware/auth");

const DataModal = require("../Modal/data.modal");

const Datarouter = Router();

Datarouter.get("/get", auth, async (req, res) => {
  const data = await DataModal.find();
  res.send(data);
});

Datarouter.post("/post", auth, async (req, res) => {
  await DataModal.insertMany(req.body);
  res.send({
    msg: "post successful",
  });
});

module.exports = Datarouter;
