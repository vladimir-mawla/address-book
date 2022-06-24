// require("dotenv").config();

// var express = require('express'),
//   app = express(),
//   port = process.env.PORT || 3000,


//   User = require('./api/models/userModel'),
//   bodyParser = require('body-parser'),
//   jsonwebtoken = require("jsonwebtoken");

// const mongoose = require('mongoose');
// const option = {
//     socketTimeoutMS: 30000,
//     keepAlive: true,
//     reconnectTries: 30000
// };

// const mongoURI = process.env.MONGODB_URI;
// mongoose.connect('mongodb+srv://vladimir_mawla:vladimirmawla@addressdb.f0m3pnj.mongodb.net/addressdb?retryWrites=true&w=majority', option).then(function(){
//     console.log('connected successfully')
// }, function(err) {
//     console.log("error")
// });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(function(req, res, next) {
//   if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
//     jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
//       if (err) req.user = undefined;
//       req.user = decode;
//       next();
//     });
//   } else {
//     req.user = undefined;
//     next();
//   }
// });
// var routes = require('./api/routes/userRoutes');
// routes(app);

// app.use(function(req, res) {
//   res.status(404).send({ url: req.originalUrl + ' not found' })
// });

// app.listen(port);

// console.log(' RESTful API server started on: ' + port);

// module.exports = app;



const express = require("express");
const mongoose = require("mongoose");
const Router = require("./api/routes/userRoutes")

const app = express();

app.use(express.json());

mongoose.connect(
  `mongodb+srv://abc:abc@cluster0.g1ht9pk.mongodb.net/addressdb?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});