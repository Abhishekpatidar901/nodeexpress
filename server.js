const express =require('express');
const app = express();
const port = process.env.PORT || 3000;
const {z} = require('zod');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const path = require('path');
const loginSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
});
app.use('public',express.static(path.join(__dirname,'public')));
const adressschema = z.object({
    street: z.string(),
    city: z.string(),
});
const userschema = z.object({
    username: z.string(),
    age: z.number(),
    address: adressschema,
});
const numberschema =z.array(z.number());
const numberorstringschema =z.union([z.number(),z.string()]);
const combinedschema = z.intersection([userschema, adressschema]);
const us1 = z.object({
    username: z.string(),
    age: z.optional(z.number()),
    email: z.nullable(z.string()),
});
const positivenumberschema = z.number().refine((num)=> num >0,{
       message: 'number must be positive',
});

try{
    const userdata =userschema.parse({
        username:'john_doe',
        age:25,
        address:{
            street:'123 main st',
            city:'exampleville',
        },
    });
    console.log('Parsed data:',userData);

}catch(err){
  console.error('Validation error:', err.errors);  
}
app.post('/login',(req,res)=>{
const {username, password} =req.body;
try{
    loginSchema.parse({username, password });

    res.json({
        success:true
    });
}catch(err){
    res.status(400).json({
        error:'invalid input', details:err.errors});
}
});
app.get('/',(req,res)=>{
    res.send('Hello, this is the root/main route!');
});

app.get('/greet/:name',(req,res)=>{
const {name} = req.params;
res.send(`Hello, ${name}!`);
});
const textcontent = [];
app.post('/add-content',(req,res)=>{
    const newc = req.body.content;
    if(!newc){
        return res.status(400).json({error:'Content is required'});
    }
    textcontent.push(newc);
    res.status(201).json({
        error:'Content is required'
    })
    res.status(201).json({message:'contnent added successfully'});

});
app.get('/html',(req,res)=>{
 const htmlContent = '<h1>This is an HTML response</h1>';
 res.send(htmlContent);
});
app.get('/api/data',(req,res)=>{
    const data = {message:'This is a JSON response'};
    res.json(data);
});
app.get('/redirect',(req,res)=>{
    res.redirect('/new-location'); 
});
app.get('file',(req,res)=>{
const filePath = path.join(__dirname,'files','example.txt');
res.sendFile(filePath);
});
app.get('/custom-header',(req,res)=>{
    res.set('xcustom header','Custom Header Value');
    res.send('Response with a custom header');
});
app.get('/not-found',(req,res)=>{
    res.status(404).send('Page not found');
});
app.get('/',(req,res)=>{
    res.send('Hello form POST route!');
})
app.post('/add',(req,res)=>{
    res.send('Hello from POST route!');
});
app.put('/put/:id',(req,res)=>{
    res.send('Hello from PUT route!');
});
app.delete('/delete/:id',(Req,res)=>{
    res.send('Hello from DELETE route!')
})
app.get('/product/:id',(req,res)=>{
    console.log(req.query);
    console.log(req.params);
});

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
});