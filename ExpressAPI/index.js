const express = require('express');
const app = express();
app.use(express.json())

const db = require('./db.js')

app.get('/', function(req, res) {
    res.send('<h1> working </h1>')
    console.log('Working');
});

app.get('/courses', function(req, res) {
    db.getCourses(function(rows) {
        res.send(rows);
    })
});

app.listen(8002, function(){
    console.log('Express started on port 8002');
});