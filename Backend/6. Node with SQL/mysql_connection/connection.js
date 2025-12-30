const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'app',
    password: '#Ranjeet4035'
});

connection.query('DROP TABLE temp', (err, results) => {
    if(err) throw err;
    console.log(results);
});

connection.end();