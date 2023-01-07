const express = require('express');
const app = express();
const port = 8000;


app.listen(port,function(error){
    if(error){
        console.log(`Error in running Server: ${error}`);
    }
    console.log(`Yepp!! Server is running on Port: ${port}`);
});