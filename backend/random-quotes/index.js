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

    let randomInx = generateRandomNumber(0, fileData.length);
    let selectedQuote = fileData[randomInx];

    res.send(selectedQuote);


  }else if(req.body.type && req.body.type == "search") {

      let keyword = req.body.keyword.toLowerCase();
      let filtedQuotes = fileData.filter(fileData =>fileData.quote.toLowerCase().includes(keyword));


   
  } else {

    res.send({ message: "No quotes found for the given keyword." });

  }

});


function generateRandomNumber(lowLimit, upperLimit) {

  let randomNum = Math.floor(Math.random() * (upperLimit - lowLimit)) + lowLimit;
    
  return randomNum;
}
