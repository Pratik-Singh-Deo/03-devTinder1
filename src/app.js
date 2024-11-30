const express = require("express");

const app = express();

// This will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Pratik", lastName: "Singh Deo" });
});

app.post("/user", (req, res) => {
  res.send("Data successfully saved");
});

// This will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Server is Running");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777...");
});
