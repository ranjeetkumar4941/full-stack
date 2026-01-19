const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().then(() => {
    console.log("Connected to DB.");
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

const allchat = [
    {
        from: "Rohit",
        to: "mohit",
        msg: "Hey buddy, how are you doing?",
        created_at: new Date()
    },
    {
        from: "Raunak",
        to: "shyam",
        msg: "Let's go to play cricket.",
        created_at: new Date()
    },
    {
        from: "Rajeev",
        to: "sanjeet",
        msg: "Will you go to watch movie?",
        created_at: new Date()
    },
    {
        from: "Rakhi",
        to: "suhani",
        msg: "let's go to play badmination.",
        created_at: new Date()
    },
    {
        from: "john",
        to: "micheal",
        msg: "Where are you?",
        created_at: new Date()
    },
    {
        from: "Raunit",
        to: "jagjeet",
        msg: "What are you doing now?",
        created_at: new Date()
    },
    {
        from: "krish",
        to: "lav",
        msg: "Let's play football.",
        created_at: new Date()
    },
    {
        from: "hari",
        to: "harsh",
        msg: "Do you want to play cricket?",
        created_at: new Date()
    },
    {
        from: "raghu",
        to: "jahnavi",
        msg: "where do you live?",
        created_at: new Date()
    },
    {
        from: "Rakesh",
        to: "raushan",
        msg: "How are you feeling now?",
        created_at: new Date()
    }
];

Chat.insertMany(allchat).then(()=> {
    console.log("Chat inserted");
    
}).catch((err) => {
    console.log(err);
    
});