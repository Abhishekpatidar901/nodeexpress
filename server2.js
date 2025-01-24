const express = require('express');
const app =express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
    console.log('This middleware runs first.');
    next();
});

app.use((req,res)=>{
    console.log('this middleware runs second.');
    res.send('Response sent from the second middleware.');
});
app.post('/api/data',(req,res)=>{
    const jsondata =req.body;
    res.json({success: true});
})