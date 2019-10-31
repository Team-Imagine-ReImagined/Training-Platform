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