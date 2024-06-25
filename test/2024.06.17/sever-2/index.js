const express = require("express");
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`sever is running ${port}`);
});

let person = [
  {
    id: 1,
    name: "Gayani",
    age: 25,
    email: "gayani@example.com",
  },
  {
    id: 2,
    name: "Bhashima",
    age: 30,
    email: "bhashima@example.com",
  },
  {
    id: 3,
    name: "Methmini",
    age: 35,
    email: "methmini@example.com",
  },
  {
    id: 4,
    name: "Dinu",
    age: 28,
    email: "dinu@example.com",
  },
  {
    id: 5,
    name: "Eranga",
    age: 40,
    email: "eranga@example.com",
  },
  {
    id: 6,
    name: "Fhathima",
    age: 22,
    email: "fhathi@example.com",
  },
  {
    id: 7,
    name: "Gimhana",
    age: 33,
    email: "gim@example.com",
  },
  {
    id: 8,
    name: "Hansi",
    age: 27,
    email: "hansi@example.com",
  },
  {
    id: 9,
    name: "Ishani",
    age: 29,
    email: "ishani@example.com",
  },
  {
    id: 10,
    name: "pumi",
    age: 24,
    email: "piumi@example.com",
  },
];

app.get("/person", (req, res) => {
  res.send(person);
});
app.post("/student1", (req, res) => {
  res.send("test 2 is okay");
});
