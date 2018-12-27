//const MongoClient= require('mongodb').MongoClient;    // connection to the mongoclient.. mongo client let us connect to the mongo server
var {MongoClient,ObjectID}=require('mongodb') // this is es6 destructuring .. same as above
  
MongoClient.connect('mongodb://localhost:27017/TodoApi',(err,db)=>{           //conect to the database
    if(err){
        return console.log('Unable to connect to the MongoDb server')             // return statement so that other console does not function
    }                                                                             // in replacement of if else
    console.log ('connected successfully')
   /*db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
       console.log(result)
   });*/
   /*db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
    console.log(result)
});*/
   db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
       console.log(result)
   })

    //db.close();
});                               