// I am connecting JS with MongoDB in this file

// firstly, we have to require mongoose
const mongoose = require('mongoose');

// to connect our js file to MongoDB we use this method
// mongoose.connect("mongodb://127.0.0.1:27017/myapp"); 
// //it takes a link which tells that which db has to be connect
// mongodb://127.0.0.1:27017/myapp is similar to http://localhost:8080/
// http <-> mongodb
// localhost <-> 127.0.0.1

// .connect() is a asynchronous function so, to handle it
// we use promise to connect mongoose
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/company");
};
main().then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Connection error", err);
});
// after connecting with mongoDB we can write our code in then block. But, Mongoose uses Operation buffering, which means mongoose lets us create model and document before connecting with mongoDB.

// creation of schema
// it creates an id automatically for each document
const userSchema = new mongoose.Schema({
  name: String, // data type start with capital letter
  email: String,
  age: Number
});

// creating model(collection) using mongoose
const User = mongoose.model("User", userSchema);
// it creates collection in db
// we name our model name same as collection name
// we write collection name singular. because, mongoDB by default change it in plural with lowercase.
// For example, User->users, Product->products


// -------------------------- INSERT -----------------
// Inserting single document
// We create an object of our model(class/collection)
// let user1 = new User({
//   name: "Bob",
//   email: "bob12@apche.com",
//   age:34
// });
// it doesn't insert data in our collection 
// for insertiing data, we have to save it

// user1.save();
// .save() is a asynchronous function. so, we use promise to handle it.

// user1.save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// Insert multiple Data(Document)
// We use insertMany() to insert multiple document. It takes an array in which we write our multiple document
// it returns promise
// User.insertMany([
//   {name: "john", email: "john@gmail.com", age:23},
//   {name: "tony", email: "tony@gmail.com", age:34},
//   {name: "lilly", email: "lilly@gmail.com", age:14}
// ]).then((res) => {
//   console.log(res);
  
// }).catch(err => {
//   console.log(err);
  
// })


// ---------------------- FIND ------------------- 
// finding single document
// User.findOne({age :{$gt: 20}})
//   .then(result=> {
//     console.log(result);
    
//   }).catch(err => {
//     console.log(err);
    
//   })

  // Every find() doesn't return promise, it returns query object(thenable). But, we can use .then() with this
  
// it will gives all document
// User.find({})
//   .then(result=> {
//     console.log(result);
    
//   }).catch(err => {
//     console.log(err);
    
//   })

// we pass condition for according to requirement
// User.find({age:{$gt: 20}})
//   .then(result=> {
//     console.log(result);
    
//   }).catch(err => {
//     console.log(err);
    
//   })

// we can find our Document using ID
// it takes id as arg
User.findById("696522c5233d1f8e7011859f")
  .then(result=> {
    console.log(result);
    
  }).catch(err => {
    console.log(err);
    
  })
