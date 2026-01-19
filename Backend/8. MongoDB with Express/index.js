const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const port = 8080;

const Chat = require('./models/chat.js');
const { log } = require('console');

// setting view engine
app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));

// connecting with MongoDB
main().then(() => {
    console.log("Connected...");
}).catch((err) => {
    console.log(err);
    
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

app.get("/chats", (req, res) => {
    Chat.find({}).then((result) => {
        res.render('allchats.ejs', {chats: result});
        
    }).catch((err) => {
        console.log(err);
        res.send("Error in Database...");
        
    })
    // res.send("This is home");
})

app.get("/chats/new", (req, res) => {
    res.render("newchat.ejs");
})

app.post("/chats", (req, res) => {
    console.log(req.body);
    let newchat = new Chat({
        from: req.body.from,
        to: req.body.to,
        msg: req.body.message,
        created_at: new Date()
    })

    newchat.save().then(() => {
        console.log("Chat was saved.");
        
    }).catch((err) => {
        console.log(err);
        res.send("Error in DB");
    })
    res.redirect("/chats");
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    
})