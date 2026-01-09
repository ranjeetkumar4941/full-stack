// We will use College DB which has made in create operation
use("College");

// db.student.find(); // It displays every documents

// for specific condition, we use .findOne({condition}) and find({condition})

// db.student.findOne({"age": 17}); 
// It displays a single document
// it returns actual value of document

// db.student.find({"city": "Delhi"});
// It displays multiple value in form of an array of objects. 
// It doesn't returns actual value but it returns cursor.
// cursor is a reference of actual value which is used to track every document

// we can pass multiple condition
db.student.findOne({"age": 23, "city": "Delhi"});

// we can use operators to define more condition.
// we define operators using dollar($) sign
// There are some operators: $gt(greater than), $lt(lower than), $gte(greater than or equal), $eq(equal to), $ne(not equal to)

// to know 

// db.student.find({"age":{$gt: 20}});

// db.student.find({$or: [{"age": 22}, {"city": "Delhi"}]});

// db.student.find({$and: [{"age": 22}, {"city": "Delhi"}]});

// practice

// where marks greater than 80
// db.student.find({"marks": {$gt: 80}});

// where city is mumbai or delhi
// db.student.find({"city": {$in: ["Delhi", "Mumbai"]}});

// where mark > 75 or city delhi
db.student.find({$or: [{"marks": {$gt: 75}}, {"city": "Delhi"}]});