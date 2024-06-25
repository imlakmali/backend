const express = require("express");
const fs = require("fs");
const app = express();
const port = 8080;

let fileData;

app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {

  console.log(`Server is running on port ${port}`);

});

fs.readFile("quotes.json", (err, data) => {

  fileData = JSON.parse(data);

});

app.post("/quotes", (req, res) => {

  if (req.body.type && req.body.type == "random") {
    let myNum = Math.floor(Math.random() * fileData.length);

    selectedQuote = fileData.find(fileData=>fileData.id==myNum)
    res.send(selectedQuote);
  } else {
    res.send({ message: "No quotes found for the given keyword." });
  }

  

});
