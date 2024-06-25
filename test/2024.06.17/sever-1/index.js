const express = require('express');
const app = express();
const http = require('http');
const port = 3000;

let testData;


app.listen(port, ()=>{
    console.log(`sever is runnng ${port} `);
});
 

app.get('/testdata',(req,res)=>{
    if(testData!=null){
        res.send(testData);
    }else{
        const options = {
            hostname: 'jsonplaceholder.typicode.com',
            port:80,
            path: '/posts',
            method: 'GET'
        };

        const externalReq =http.request(options, (externalRes)=>{
            let data = '';
            externalRes.on('data',(chunk)=>{
                data += chunk;
            });
            externalRes.on('end',()=>{
                res.send(data);
            });
        })
        externalReq.end()
    }
});

app.post('/test1', (res,req)=>{
    req.send("post s okay")
})

