// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// app.use(bodyParser.json());

// app.listen(8080, () => {
//   console.log("sever is ready");
// });

// let student = [
//   { id: 1, name: "Nimal", marks: 78 },
//   { id: 2, name: "Kamal", marks: 50 },
//   { id: 3, name: "Supun", marks: 20 },
// ];

// app.get("/", (req, res) => {

//   res.send(student);
// });

// app.post("/", (req, res) => {
//     let name = req.body.name;
//   res.json(name);
// });

function loadDoc() {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    document.getElementById("demo").innerHTML = this.responseText;
  };
  xmlhttp.open("GET", "README.TXT");
  xmlhttp.send();
}
