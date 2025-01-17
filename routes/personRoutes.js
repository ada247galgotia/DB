
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
        console.log(req.body);
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



router.get('/:worktype', async(req,res)=>{

    try{
        const worktype=req.params.worktype;
        if(worktype=='chef' || worktype=='waiter' || worktype=='manager'){
            const response= await person.find({work:worktype});
            console.log("data fetched");
            res.status(200).json(response);


        }
        else{
            res.status(404).json({error:'Invalid work type'});
        }

    }catch(err){

        console.log(err);
        res.status(500).json({error: 'Internal server error'});


    }

    

})

router.put('/:id', async (req,res)=>{

    try{
        const personId=req.params.id;
        const updatedPersonData=req.body;
        const response= await person.findByIdAndUpdate(personId,updatedPersonData ,{
            new: true,
            runValidators:true
        })

        if(!response){
            return res.status(404).json({error:'person not found'});
        }
        console.log('data upadte');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
})

router.delete('/:id', async(req,res)=>{
   try{
    const personId=req.params.id;
    const response= await person.findByIdAndDelete(personId);

    if(!response){
        res.status(404).json({error: 'person not found'});
    }
    console.log('data deleted');
     return res.status(200).json({message: 'person delete succesfully'});

   }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});

   }
})

module.exports=router;