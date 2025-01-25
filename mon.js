const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app =express();

app.use(express.json());
const userschema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type: String, required: true, unique:true},
    age:{type:Number, default:18},
    createdAt: {type: Date, default: Date.now},
});
const personschema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    favoritefood:{type:[String]}
});
const User = mongoose.model('User',userschema);
const Person = mongoose.model('Person',personschema);

const mongoURL = process.env.mongoURL || 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoURL,{useNewUrlParser:true, useUnifiedTopology: true})
          .then(()=> console.log('connected to mongodb'))
          .catch((err)=> console.error('Error connecting to mongoDB:',err));

app.get('/',(req,res)=>{
    res.send('Mongoose is setup and connected to MongoDB');
});

app.post('/users', async(req,res)=>{
 try{
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser)
 }catch{

 }
});
app.post('/person',async(req,res)=>{
    const person = new Person(req.body);
    const savedperson =await person.save();
    res.status(201).json(savedperson);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})