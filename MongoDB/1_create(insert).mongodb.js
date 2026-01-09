// in MongoDB, we use camelcase for method name.
// semicolon is not mendatory but it is a good practice to use it

use("College"); //to use or create db. if db exist then it will use that otherwise it will create a new one

db.dropDatabase(); // delete database

//If we doesn't insert data in this db it will delete from memory when we quit from mongoDB.
// If we want to store our db in memory then we have to insert data in that database.

// To insert data 
// .insertOne() method is used to insert a single document(similar to MYSQL row), it takes an object in form of json data
db.student.insertOne( //here, student is a collection(Similar to MYSQL table)
    {
        "name": "John",
        "age": 21,
        "marks": 56
    }
);
// 'db' refers to that database which we are using, through use() command
// in db.student.insertOne(), if student collection exist in db then it will store in that collection otherwise it creates a new collection in our database
db.student.insertMany( // it takes an array of objects(json)
    [
        {
            "name": "Bob",
            "age": 17,
            "city": "Mumbai"
        },
        {
            "name": "Jack",
            "age": 23,
            "city": "Delhi"
        },
        {
            "name": "Tony",
            "age": 22,
            "city": "Delhi"
        },
        {
            "name": "Steve",
            "age": 25,
            "city": "Goa",
            "marks": 86
        }
    ]
);

db.student.find(); //to display all data in the collection

