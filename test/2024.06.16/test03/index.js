const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("sever is ready");
});
app.use(express.static("public"));

app.get("/test01", (req, res) => {

  res.send("test 01 is okay");
  
});

app.post("/employee", (req, res) => {
  res.json([
    { name: "Lakmali", Salary: 576478 },
    { name: "Kamal", Salary: 200000 },
    { name: "Nimal", Salary: 5000 },
    { name: "Vimal", Salary: 577858 },
  ]);
});

