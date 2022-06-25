const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./api/routes/userRoutes");
const contactRouter = require("./api/routes/contactRoutes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Estableshing connection
mongoose.connect(
  `mongodb+srv://abc:abc@cluster0.g1ht9pk.mongodb.net/addressdb?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


// Checking connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const cors = require("cors");
app.use(cors());

app.use(userRouter);
app.use(contactRouter);

// const corsOptions = {
//   origin: ['http://localhost:3001'],
//   optionsSuccessStatus: 200, // some legacy browsers     (IE11, various SmartTVs) choke on 204
// };
// app.use(cors(corsOptions));
// Listening to a port
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
