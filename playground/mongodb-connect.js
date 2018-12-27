//const MongoClient= require('mongodb').MongoClient;    // connection to the mongoclient.. mongo client let us connect to the mongo server
var {MongoClient,ObjectID}=require('mongodb') // this is es6 destructuring .. same as above
/*var obj=new ObjectID();                            // creating a new instance 
console.log(obj)*/
MongoClient.connect('mongodb://localhost:27017/TodoApi',(err,db)=>{           //conect to the database
    if(err){
        return console.log('Unable to connect to the MongoDb server')             // return statement so that other console does not function
    }                                                                             // in replacement of if else
    console.log ('connected successfully')
     
    /*db.collection('Todos').insertOne({
        text:'something to do',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('unable to start todo',err)
        }
        console.log(JSON.stringify(result.ops,undefined,2))
    }) 
    db.close();*/

    /*db.collection('Users').insertOne({
        name:'shreya',
        age:25,
        location:'lucknow'
    },(err,result)=>{
        if(err){
            return console.log('unable to start users',err)
        }console.log(JSON.stringify(result.ops,undefined,2))
        console.log(result.ops[0]._id.getTimestamp());
    });*/

    db.close();
});                               