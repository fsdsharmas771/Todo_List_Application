const db = require('../config/mongoose');
const Todo = require('../models/todos');
module.exports.newtodo = function(req,res){
    Todo.create(req.body,function(error,newtodo){
        if(error){
            console.log('Error in creating todo',error)
            return;
        }
        console.log('******',newtodo);
        return res.redirect('back');
    })
}