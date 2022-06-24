"use strict";
const express = require("express");
const userModel = require("../models/userModel");
var bcrypt = require("bcryptjs");
const app = express();

// Register API
app.post("/register", async (request, response) => {
  const user = new userModel(request.body);
  user.hash_password = bcrypt.hashSync(request.body.password, 10);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Get All Users API
app.get("/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Removing user API
app.delete("/remove_user", async (req, res) => {
  const users = await userModel.findOne({ _id: req.body }).deleteOne();

  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
})

module.exports = app;
