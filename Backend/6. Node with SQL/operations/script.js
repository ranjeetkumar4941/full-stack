const mysql = require('mysql2');

const connection = mysql.createConnection({
    user : "root",
    host : "localhost",
    database : "company",
    password : "#Ranjeet4035"
});

try{
    connection.query("SHOW TABLES", (err, result) => {
        if(err) throw err;
        console.log(result);
    });

    //Inserting data
    // If we have to store a single row then we use this method
    // let q = "INSERT INTO user (id, username, email, password) VALUES (?,?,?,?)";// we use placeholder(?) which replaces with value
    // let user = [123, 'jack', 'abc@gmail.com', 'fd12df'];
    // connection.query(q,user, (err, result) => {
    //     if(err) throw err;
    //     console.log(result);
        
    // })

    // if we have to insert multiple rows then we use array of arrays and single placeholder(?).
    let query = "INSERT INTO user (id, username, email, password) VALUES ?";
    let users = [
        [123134, 'jack134', 'abc@gmail.com134', 'fd12df134'],
        [123125, 'jack125', 'abc@gmail.com125', 'fd12df125']

    ];

    connection.query(query,[users], (err, result) => {
        if(err) throw err;
        console.log(result);
        
    })

    connection.query("SELECT * FROM user", (err, result) => {
        if(err) throw err;
        console.log(result);
    });
}catch(err){
    console.log(err);
    
}

connection.end();