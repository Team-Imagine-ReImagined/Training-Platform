const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'rootuser',
    password: 'password',
    database: 'training'
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySql");
});

exports.addCourse = function(data, readyFn) {
    db.query('INSERT INTO course ?', data,
        function(error, results, fields) {
            if (error) throw error;
            readyFn(results.insertId);
        });
}

exports.getCourses = function(callback) {
    db.query(
        "SELECT courseID, courseName, courseDate, location, description, courseTrainer, info " +
        "FROM course",
        function(err, rows) {
            if (err) throw err;
            callback(rows);
        });
}