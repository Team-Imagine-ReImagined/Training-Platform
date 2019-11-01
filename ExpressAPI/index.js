const express = require('express');
const app = express();
const db = require('./db.js');
app.use(express.json());

function updateCourses(coursesReadyFn) {
    db.getCourses(function(rows) {
        courses = rows;
        coursesReadyFn();
    })
}

app.get('/getcourses', function(req, res) {
    updateCourses(function() {
        res.send(courses);
    });
});

app.post('/addcourse', function(req, res) {
    console.log("In add course");
    db.addCourse(req.body, function(insertedKey) {
        updateCourses(function() {
            res.send(courses)
        })
    })
})

app.listen(8002, function() {
    console.log('Express started on port 8002');
});

courses = []