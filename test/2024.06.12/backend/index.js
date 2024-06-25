const express = require("express");
const app = express();

app.listen(8080, () => console.log("sever ready"));

app.get("/", (req, res) => {
  res.send("hello lak");
});

app.get("/summer", (req, res) => {
  res.send("this is summer");
});

app.get("/winter", (req, res) => {
  res.send("this is winter");
});
