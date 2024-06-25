const express = require('express');
const app = express();

app.listen(8080 , ()=> {
    console.log('sever is ready');
})

app.get ("/", (req,res)=>{
    res.send('hellow get');
})

app.post("/" , (req,res)=>{
    res.send('this is post');
})