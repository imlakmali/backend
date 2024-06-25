const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


app.use(express.json());
app.use(express.static('public'));



app.get('/test', (req, res) => {
    res.json({ message: "hello from the server" });
});

app.get('/customer', (req, res) => {
    res.json({ name: "Lakmali", age: 30 });
});

app.post('/items', (req, res) => {
    res.json({ name: "apple", color: "red" });
});
