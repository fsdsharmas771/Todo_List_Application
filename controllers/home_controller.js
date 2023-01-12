const Todo = require("../models/todos");

module.exports.home = function(req,res){
    Todo.find({}, function (err, todos) {
        if (err) {
            console.log('Error in fetching Contacts from DB');
        }
        return res.render('home.ejs', {
            title: "Home",
            todo_list: todos
        });
    });
}