

const MenuItem=require('./models/menu');

app.post('/menu',async (req,res)=>{

    try{
        const data=req.body
        const newMenuItem=new MenuItem(data);
        const response= await newMenuItem.save();
        console.log('data saved');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }

})
