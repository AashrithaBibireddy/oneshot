const express = require("express");

const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes.js");
const env = require("dotenv");

require("dotenv").config();

const app = express(); // create express server
const port = process.env.PORT || 5002; // port server is running on

const cors = require('cors');
const corsOptions ={
    origin:'*', 
    credentials:true,   
    //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions)); // cors middleware
app.use(express.json()); // body parser middleware

mongoose.connect('mongodb+srv://akhil:akhil@cluster0.zq9rcbe.mongodb.net/', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
}); // connect to database
const connection = mongoose.connection; // get connection
connection.once("open", () => {
  // once connection is open
  console.log("MongoDB database connection established successfully"); // log success
});

//routes
app.use("/api", authRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to HomePage</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

