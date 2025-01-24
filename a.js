const bodyParser = require('body-parser');
const express = require('express');
constbodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/submit-data',(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;

    res.send(`Received data: Name - ${name}, Age - ${age}`);
});

app.listen(3000,()=>{
console.log('server is running on port 3000');
});