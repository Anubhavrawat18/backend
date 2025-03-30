const express = require("express");
const app = express();

// IMPORTANT
require("dotenv").config();

const port = 3000;
// above is a personal info so such is given in a .env file
// amnd accessed using process.env.<variable name>

app.get("/", (req, res) => {
  res.send("My first backend program!");
});

app.get("/github", (req, res) => {
  res.send("Anubhavrawat16");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login at Omnifood</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h3>Welcome to YouTube</h3>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
// here actually the server will listen at the port 4000 as it is the one specified in the .env file
// and in the listen function we have passed the port number from the .env file
