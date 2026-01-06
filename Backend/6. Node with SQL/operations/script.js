const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');

const connection = mysql.createConnection({
    user : "root",
    host : "localhost",
    database : "company",
    password : "#Ranjeet4035"
});

// try{
//     connection.query("SHOW TABLES", (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     });

//     //Inserting data
//     // If we have to store a single row then we use this method
//     // let q = "INSERT INTO user (id, username, email, password) VALUES (?,?,?,?)";// we use placeholder(?) which replaces with value
//     // let user = [123, 'jack', 'abc@gmail.com', 'fd12df'];
//     // connection.query(q,user, (err, result) => {
//     //     if(err) throw err;
//     //     console.log(result);
        
//     // })

//     // if we have to insert multiple rows then we use array of arrays and single placeholder(?).
//     let query = "INSERT INTO user (id, username, email, password) VALUES ?";
//     let users = [
//         [12313, 'jack13', 'abc@gmail.com13', 'fd12df13'],
//         [12312, 'jack12', 'abc@gmail.com12', 'fd12df12']

//     ];

//     connection.query(query,[users], (err, result) => {
//         if(err) throw err;
//         console.log(result);
        
//     })

//     connection.query("SELECT * FROM user", (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     });
// }catch(err){
//     console.log(err);
    
// }

// creating fake date and insert bulk data
let user = () => { 
    return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
    ];
};

let usersData= [];
for(let i=0; i<100; i++){
    usersData[i] = user();
}

try {
    let q = "INSERT INTO user VALUES ?";
    connection.query(q, [usersData], (err, result) => {
        if(err) throw err;
        console.log(result);
    });
} catch (error) {
    console.log(error);
}

connection.end();