'use strict';
// module.exports = function(app) {
//     var userHandlers = require('../controllers/userController');
//     // todoList Routes
//     app.route('/tasks')
//         .post(userHandlers.loginRequired, userHandlers.profile);
//     app.route('/auth/register')
//         .post(userHandlers.register);
//    app.route('/auth/sign_in')
//         .post(userHandlers.sign_in);
// };


const express = require("express");
const userModel = require("../models/userModel");
var bcrypt = require('bcryptjs');

const app = express();

app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});


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

// ...
app.get("/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;
