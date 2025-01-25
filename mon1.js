const mongoose = require('mongoose');

const personschema = new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    favoritefood:{type:[String]}
});

const Person = mongoose.model('Person',personschema);
mongoose.connect('url',{useNewUrlParser:true,useUnifiedTopology:true,}).then(()=>{
    console.log('Connected to MongoDB');
}).catch(err =>{
console.error('Connection error:',err);
}
);

const seedData =async()=>{
    const persons = [
        { name: 'Alice', age: 25, favoritefood: ['Pizza', 'Pasta'] },
        { name: 'Bob', age: 30, favoritefood: ['Burgers', 'Fries'] },
        { name: 'Charlie', age: 28, favoritefood: ['Salad', 'Soup'] },
    ];

    try{
  const savedperson = await Person.create(persons);
  console.log('Record Creared:',savedperson);
    }catch(error){
  console.error('Error creating records:',error.message);
    }finally{
        mongoose.disconnect();
    }
};

const findpeoplebyname = async(personname) =>{
 try{
 const people = await Person.find({name:personname});
 return people;
 }catch(error){
console.error('Error finding people by name:',error.message);
throw error;
 }
};

const findOneByFood = async(food) =>{
const f = await Person.findOne({favoritefood:food});
return f;
};

const findPersonById = async(personId) =>{
    const p = await Person.findById(personId);
    if(!p){
        console.log(`Person with ID ${personId} not found.`);
        return null;
    }
    return p;
}

const findEditTheSave = async(personId) =>{
    try{
        const person = await Person.findById(personId);
        if(!person){
            console.log(`Person with ID ${personId} not found.`);
        }
        person.favoriteFoods.push("hamburger");
        const updatedPerson= await person.save();
        return updatedPerson;
    }catch(error){
        console.error("Error in findEeditThenSave",error.message);
        throw error;
    }
};

const findAndUpdate = async (personName)=>{
    try{
        const updatedperson = await Person.findOneAndUpdate(
            {name:personName},{age:20},{new:true}); 
    return updatedperson;
        }catch(error){
            console.error("Error in findAndUpdate:",error.message);
            throw error;
        }
};

const findByIdAndRemove()