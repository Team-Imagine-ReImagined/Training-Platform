const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'training'
});

db.connect(function(err){
    if(err) throw err;
    console.log("Connected to MySql");
})

exports.editCourse = function(data, readyFn){
    db.query('UPDATE course set courseName = ?, courseDate = ?, location = ?, '+ 
    "description = ?, courseTrainer = ?, info = ? ",
    [data.courseName, data.courseDate, data.location, data.description, data.courseTrainer, data.info],
    function(error, results, fields){
        if(error) throw error;
        readyFn(results.insertId);
    });
}