require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const messagemiddleware =(req,res, next)=>{

    req.transformMessage = process.env.MESSAGE_STYLE === 'uppercase'?'HELLO WORLD':'Hello World';
  next();
};    

app.use(messagemiddleware);

app.get('/json',(req,res)=>{
res.json({message: req.transformMessage});
});

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
});