const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Heloo hello hello");
});

app.use("/test", (req, res) => {
  res.send("Server is Running");
});

app.use("/test1", (req, res) => {
  res.send("Server is Running fine");
});

app.use("/", (req, res) => {
  res.send("Namaste NodeJs");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777...");
});
