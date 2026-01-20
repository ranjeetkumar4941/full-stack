const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const port = 8080;
const methodoverride = require("method-override");

app.use(methodoverride("_method"));

const Chat = require('./models/chat.js');
const { log } = require('console');

// setting view engine
app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));

// to parse data for post request
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

// all chats route
app.get("/chats", (req, res) => {
    Chat.find({}).then((result) => {
        res.render('allchats.ejs', {chats: result});
        
    }).catch((err) => {
        console.log(err);
        res.send("Error in Database...");
        
    })
    // res.send("This is home");
})

// new chat route for form
app.get("/chats/new", (req, res) => {
    res.render("newchat.ejs");
})

// save new chat route
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
});

// edit chat form route
app.get("/chats/:id/edit", async (req, res) => {
    let chat = await Chat.findById(req.params.id);
    
    res.render("edit.ejs", {chat});
    
})

// Update chat route
app.patch("/chats/:id", (req, res) => {
    let id = req.params.id;
    let message = req.body.msg;
    
    Chat.findByIdAndUpdate(id, {msg: message, created_at: new Date()}, {runValidators: true, new: true})
    .then(res => {
        console.log("success");
        
        
    }).catch((err) => {
        res.send("Error in DB");
        // console.log(err);
        console.log(err.errors.msg.properties.message);
    })
    res.redirect("/chats")
});

// delete route
app.delete("/chats/:id", (req, res) => {
    let id = req.params.id;
    Chat.findByIdAndDelete(id).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    });
    res.redirect("/chats");
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    
})