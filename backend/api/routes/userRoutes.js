"use strict";
const express = require("express");
const userModel = require("../models/userModel");
var bcrypt = require("bcryptjs");
const app = express();
const jwt = require('jsonwebtoken');


// Register API
app.post("/register", async (request, response) => {
  const user = new userModel(request.body);
  user.hash_password = bcrypt.hashSync(request.body.password, 10);
  if (request.body.password === "" || request.body.fullName === "" || request.body.email === ""){
    response.send("Fill All Fields")
  } else if(request.body.password.length < 6){
    response.send("Too Short")
  }
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500);
  }
});

// Login API
app.post('/login', async (req, res)  => {
  userModel.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;
    if (!user || !user.comparePassword(req.body.password)) {
      return res.send({ message: 'Authentication failed. Invalid user or password.' });
    }
    return res.send({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs'), user });
  });
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
