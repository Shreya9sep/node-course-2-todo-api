var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
 /*var newTodo = new Todo({
     text:'cooked Dinner'
 });

 newTodo.save().then((doc)=>{
     console.log('saved the doc', doc)
 },(err)=>{
     console.log('error occured',err)
 });*/

 /*var otherTodo = new Todo({
    text:'  feed the cat  ',
    
})

otherTodo.save().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2))
},(err)=>{
    console.log('error occured',err)
});*/


/*var newUser = new User({
    email:'  feed@thecat.com  ',
    
});

newUser.save().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2))
},(err)=>{
    console.log('error occured',err)
});*/