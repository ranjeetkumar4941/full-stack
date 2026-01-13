const mongoose = require('mongoose');

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon")
}
main()
    .then(() => {
        console.log("Connected...");
        
    }).catch((err) => {
        console.log(err);
    })

// ------------------------ Schema Validation ----------------
// // datatype is also a constraints because it defines a rule in schema

// // this is a short form of defining our schema
// const userSchema = new mongoose.Schema({
//   name: String, 
//   email: String,
//   age: Number
// });

// // for more constraints
// // we use this to define our schema which defines schema validations.
// // we can write different constraints for our schema
// const Schema = mongoose.Schema;
// const bookSchema = new Schema({
//     title:{
//         type: String,
//         required: true, it is similar to SQL NOT NULL 
//     },
//     author: {
//         type: String,
//     },
//     price: {
//         type: Number
//     }
// });

// const Book = mongoose.model("Book", bookSchema);

// // it will store in DB
// let user = new Book({
//     title: "Math X",
//     author: "R k",
//     price: 199 // we can send number as "199" because mongoDB parse it into 199. But, it should be only number not any other character.
// });

// // It will create error because we set title is required in schema but here we are not passing the value of title.
// let user1 = new Book({
//     author: "R k",
//     price: 199
// });

// user.save().then((res) => {
//     console.log(res);
    
// }).catch((err) => {
//     console.log(err);
    
// })

// ---------------------- SchemaType option ---------------
const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength: 20 // it sets maximum length to our string
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        // we can define our error using this method
        min: [0, "Price cannot be lower than Zero"] // it is error
        // it sets minimum value of number
    },
    discount: {
        type: Number,
        default: 5 // it is similat to SQL default
    },
    category: {
        type: String,
        enum: ["education", "comics", "novel"]
    },
    genre: [String] // we can create an array 
});

const Book = mongoose.model("Book", bookSchema);

let user = new Book({
    title: "Math X",
    author: "Dinkar",
    price: 199,
    // category: "education",
    // genre: ["education", "class X", "Hindi"]
});
// We are not passing any discount value but it will set a value which is 5

// user.save().then((res) => {
//     console.log(res);
    
// }).catch(err => {
//     console.log(err);
    
// })

// ------------- validation in Updating & Errors ---------

// rules which are defined within our schema by default doesn't work in updation. It works only during insertion not updation.
// To following rules we use an option 'runValidators' and set it's value to true.
Book.findByIdAndUpdate("69669042f6efbe3a3eaad768", {price: -12}, {new: true, runValidators: true}).then((res) => {
    console.log(res);
    
}).catch((err) => {
    // we can get error message to display
    console.log(err.errors.price.properties.message);
    
})