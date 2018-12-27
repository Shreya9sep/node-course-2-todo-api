//const MongoClient= require('mongodb').MongoClient;    // connection to the mongoclient.. mongo client let us connect to the mongo server
var {MongoClient,ObjectID}=require('mongodb') // this is es6 destructuring .. same as above
  
MongoClient.connect('mongodb://localhost:27017/TodoApi',(err,db)=>{           //conect to the database
    if(err){
        return console.log('Unable to connect to the MongoDb server')             // return statement so that other console does not function
    }                                                                             // in replacement of if else
    console.log ('connected successfully')
   /*db.collection('Todos') .find({_id:ObjectID('5c245d3fa1f5456e4748584a')}).toArray().then((docs)=>{
       console.log('Todos');
       console.log(JSON.stringify(docs,undefined,2))
   },(err)=>{
       console.log('unable to fetch todos',err)
   })*/
   db.collection('Todos') .find().count().then((count)=>{
    console.log('Todos counts',count);
    
},(err)=>{
    console.log('unable to fetch todos',err)
})
   

    //db.close();
});                               