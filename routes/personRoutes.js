
const express=require('express');
const router=express.Router();
const person=require('./../models/person.js');



router.post('/', async (req, res)=>{
    try{
        const data=req.body
        const newperson=new person(data);

        const response=await newperson.save();

        console.log('data saved');
        res.status(200).json(response);

    }catch(err){
        //console.log(req.body);
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
})

router.get('/',async (req, res)=>{
  
    try{
        const data= await person.find();
        console.log('data feteched sucesssfully');
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
})

router.put('./id',(req,res)=>{
    try{
        const personId=req.params.dictionary;
        const personData=req.body;
        const response=person.findByIdAndUpdate(personId,personData,{
            new:true,
            runValidators:true,
        })

        if(!response){
            return res.status(404).json({
                error:'person not found'
            });
        }

        console.log('data updated');
        res.status(200).json(response);

            
        


    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});

    }
})

module.exports=router;