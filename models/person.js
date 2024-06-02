const mongoose=require('mongoose');

const personSchema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','manager','waiter'],
        required:true
        
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    adress:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    }

});
const person=mongoose.model('person',personSchema);
module.exports=person;

