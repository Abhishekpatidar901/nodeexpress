const express = require('express');
const app = express();
const port =3000;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.post('/form',(req,res)=>{
    const formData = req.body;
    res.json({
        receivedData: formData
    });
});
app.post('/json', (req, res) => {
    const jsonData = req.body;
    res.json({ receivedData: jsonData });
  });

  app.get('/get-info',(req,res)=>{
const userAgent = req.headers['user-agent'];
const acceptLanguage =req.headers['accept-language'];

res.json({
userAgent,
acceptLanguage,
});
  });

  app.listen(port,()=>{
    console.log('Server is running on port 3000');
  })