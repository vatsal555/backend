require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("userdotcom");
});

app.get("/login", (req, res) => {
  res.send("please login!");
});

app.listen(process.env.PORT, () => {
  console.log(`example app listening on port ${process.env.PORT}`);
});
