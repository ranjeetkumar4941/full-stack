const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'app',
    password: '#Ranjeet4035'
});

// connection.query('DROP TABLE temp', (err, results) => {
//     if(err) throw err;
//     console.log(results);
// });

// we can also write our query in a variable
let query = "DROP TABLE temp";
connection.query(query, (err, result) => {
    if(err) throw err;
    console.log(result); // it gives output an array of objects
    
})

connection.end();