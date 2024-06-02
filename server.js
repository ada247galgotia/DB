const express = require('express')
const app = express()
const db=require('./db');
//const person=require('./models/person');
const per=require('./routes/personRoutes');
//const men=require('./routes/menuRoutes');

app.use('/person',per);
//app.use('/menu',men);

const bodyparser=require('body-parser');
app.use(bodyparser.json());

//const person=require('./models/person');
//const MenuItem=require('./models/menu');

app.get('/', function (req, res) {
  res.send('welcome to my hotel')
})






//app.get('person/:workType',(req,res)=>{

    //const workType=req.params.workType;
    //if(workType=='chef'|| workType =='waiter' ||workType =='manager'){
        //const response=person.find({work:workType});
        //console.log('response fetched');
       // res.status(200).json(response);
    //}
    //else{
       // res.status(500).json({error:'Internal server error'});
    //}

//})



app.listen(3000,()=>{
    console.log('running on port no 3000');
})