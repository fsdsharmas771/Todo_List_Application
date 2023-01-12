const db = require('../config/mongoose');
const Todo = require('../models/todos');

module.exports.delete_todo = function(req,res){
    let id = req.query.id;
    Todo.findByIdAndDelete(id,function(error){
        if(error){
            console.log('Error in deleting todo',error);
        }
        return res.redirect('back');
    });
}