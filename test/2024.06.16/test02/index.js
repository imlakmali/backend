const express = require('express');
const app = express();

app.listen(3000,()=>{console.log('server is running')})
app.use(express.static('public'));

app.get('/test',(req,res)=>{
    res.send("test")
})
 
app.get('/customer',(req,res)=>{
    res.send({"name":"Lakmali","salary":30000})
})

app.post('/items',(req,res)=>{
    res.send({"name":"apple","color":"red"})
})