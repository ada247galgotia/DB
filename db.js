//const mongoose=require('mongoose');

//const monoURL='mongodb://localhost:27017/hotel'

//mongoose.connect(monoURL,{
   // useNewUrlParser:true,
    //useUnifiedTopology:true

//})

//const db=mongoose.connection;

//b.on('connection',()=>{
    //console.log('connected to mongoDB server');
//});

//db.on('error',(err)=>{
    //console.error('mongoDB conection erroe',err);
//});
//db.on('disconnected',()=>{
    //console.log('mongoDB disconnected');
//});

//module.exports=db;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yourDB');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connected to MongoDB');
});

module.exports=db;