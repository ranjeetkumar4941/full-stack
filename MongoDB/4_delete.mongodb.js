use("College");

// for deleting one document, we use .deleteOne()
// if we doesn't pass anything then it delete one document from top
// So, we pass a condition for deleting document
db.student.deleteOne({age: {$gt: 23}});

// We use deleteMany() to delete multiple document at a time.
// If we doesn't pass any condition(filter) then it deletes all document in our collection
// So, we pass a condition to delete.

db.student.deleteMany({age: {$in: [20, 21, 22]}});

// to delete all document
db.student.deleteMany({});

// we use .dropDatabase() to delete our Db 
db.dropDatabase();