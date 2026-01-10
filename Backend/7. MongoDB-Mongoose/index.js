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

// Inserting data
// We create an object of our model(class/collection)
let user1 = new User({
  name: "Bob",
  email: "bob12@apche.com",
  age:34
});
// it doesn't insert data in our collection 
// for insertiing data, we have to save it

// user1.save();
// .save() is a asynchronous function. so, we use promise to handle it.

user1.save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })