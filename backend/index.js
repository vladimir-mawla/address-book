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




// // const { MongoClient } = require('mongodb');

// // async function main() {
// //     /**
// //      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
// //      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
// //      */
// //     const uri = "mongodb+srv://abc:abc@addressdb.f0m3pnj.mongodb.net/addressdb?retryWrites=true&w=majority";

// //     /**
// //      * The Mongo Client you will use to interact with your database
// //      * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
// //      * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
// //      * pass option { useUnifiedTopology: true } to the MongoClient constructor.
// //      * const client =  new MongoClient(uri, {useUnifiedTopology: true})
// //      */
// //     const client = new MongoClient(uri);

// //     try {
// //         // Connect to the MongoDB cluster
// //         await client.connect();

// //         // Make the appropriate DB calls
// //         await listDatabases(client);

// //     } catch (e) {
// //         console.error(e);
// //     } finally {
// //         // Close the connection to the MongoDB cluster
// //         await client.close();
// //     }
// // }

// // main().catch(console.error);

// async function listDatabases(client) {
//    databasesList = await client.db().admin().listDatabases();

//    console.log("Databases:");
//    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };





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





