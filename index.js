const express = require('express');
const app = express();
const port = 8000;

app.use('/',require('./routes/index'));
app.set('view engin','ejs');
app.set('views','./views');
app.use(express.static('./assets'));// without this we cant use static files

app.listen(port,function(error){
    if(error){
        console.log(`Error in running Server: ${error}`);
    }
    console.log(`Yepp!! Server is running on Port: ${port}`);
});