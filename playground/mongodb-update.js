//const MongoClient= require('mongodb').MongoClient;    // connection to the mongoclient.. mongo client let us connect to the mongo server
var {MongoClient,ObjectID}=require('mongodb') // this is es6 destructuring .. same as above
  
MongoClient.connect('mongodb://localhost:27017/TodoApi',(err,db)=>{           //conect to the database
    if(err){
        return console.log('Unable to connect to the MongoDb server')             // return statement so that other console does not function
    }                                                                             // in replacement of if else
    console.log ('connected successfully')

    /*db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c247b27a1f5456e47485ef5')
    },{
        $set:{
            completed:true
        }
    },{
        returnOriginial:false
    }).then((result)=>{
        console.log(result)
    }) */
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c2481eba1f5456e474861b5')
    },{
        $set:{
            name:'shreya'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result)
    }) 


   /*db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
       console.log(result)
   });*/
   /*db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
    console.log(result)
});*/
   /*db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
       console.log(result)
   })*/

    //db.close();
});                               