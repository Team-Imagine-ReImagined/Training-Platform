const express = require('express');
const app = express();
const db = require('./db.js');
app.use(express.json());

function updateCourses(coursesReadyFn){
    db.getCourses( function(rows){
        courses = rows;
        coursesReadyFn();
    })
}

app.get('/getcourses', function (req,res){
    updateCourses(function(){
        res.send(courses);
    });
});

app.post('/addcourse', function(req,res){
    db.addCourse(req.body, function(insertedKey){
        updateCourses(function(){
            res.send(courses)
        })
    })
})

app.listen(8002, function(){
    console.log('Express started on port 8002');
})

courses = []

app.put('/editcourse', function(req,res){
    db.editCourse(req.body,function(){
        updateCourses(function(){
            res.send(courses)
        })
    });
});

courses = [];