const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const port = 8080;

const Chat = require('./models/chat.js');

// setting view engine
app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));

// connecting with MongoDB
main().then(() => {
    console.log("Connected...");
}).catch((err) => {
    console.log(err);
    
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

app.get("/", (req, res) => {
    res.send("This is home");
})
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    
})