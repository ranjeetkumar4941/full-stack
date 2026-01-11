use("College");

// For updating one document, we use .updateOne()
// It takes condition and the value that has been update
db.student.updateOne({age: {$gte: 18}}, {$set: {Voter: "Yes"}});

// for updating multiple document, we use .updateMany()
db.student.updateMany({age: {$lt: 18}}, {$set: {voter: "No"}});

// to replace total value of a document, we use .replaceOne()
// it takes condition and value of new document
db.student.replaceOne({age: {$gte: 23}}, {
    "name": "Rohit",
    "age": 19,
    "voter": "Yes"
});