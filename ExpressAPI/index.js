const express = require('express');
const app = express();

app.get('/', function (req,res){
    res.send('<h1> working </h1>')
    console.log('Working');
});

app.listen(8002, function(){
    console.log('Express started on port 8002');
})