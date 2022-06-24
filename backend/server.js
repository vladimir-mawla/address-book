const express = require("express");
const mongoose = require("mongoose");
const Router = require("./api/routes/userRoutes")
const app = express();
app.use(express.json());

// Estableshing connection
mongoose.connect(
  `mongodb+srv://abc:abc@cluster0.g1ht9pk.mongodb.net/addressdb?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Checking connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

// Listening to a port
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});