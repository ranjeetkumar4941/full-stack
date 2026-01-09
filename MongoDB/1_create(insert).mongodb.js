use("College"); //to use or create db. if db exist then it will use that otherwise it will create a new one
db.dropDatabase();
//If we doesn't insert data in this db it will delete from memory when we quit from mongoDB.
// If we want to store our db in memory then we have to insert data in that database.

// To insert data 
// this method is used to insert a single document(similar to MYSQL row)
db.student.insertOne( //here, student is a collection(Similar to MYSQL table)
    {
        "name": "John",
        "age": 21,
        "marks": 56
    }
);

db.student.insertMany( // it takes an array of objects
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
            "name": "Steve",
            "age": 25,
            "city": "Goa",
            "marks": 86
        }
    ]
);
db.student.find() //to display all data in the collection

