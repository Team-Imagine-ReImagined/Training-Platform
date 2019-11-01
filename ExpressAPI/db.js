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

exports.getCourses = function(callback) {
    db.query(
        "SELECT * FROM course ORDER BY courseName ASC, CAST(courseDate as DATETIME) DESC;",
        function(err, rows) {
            if (err) {
                throw err;
            }
            callback(rows);
        }
    )
}