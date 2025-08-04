const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const { v4: uuidv4 } = require('uuid');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

let posts = [
    {
        id: uuidv4(),
        Username: "John",
        content: "This is my first post",
    },
    {
        id: uuidv4(),
        Username: "Jane",
        content: "Today is a great day!",
    },
    {
        id: uuidv4(),
        Username: "Doe",
        content: "This is a sample post",
    },
    {
        id: uuidv4(),
        Username: "Alice",
        content: "Learning Express.js is fun!", 
    }
]
app.get('/posts', (req, res) => {
    res.render('index.ejs', { posts});
});

app.get('/posts/new', (req, res) => {
    res.render('newPost.ejs');
});

app.post('/posts', (req, res) => {
    let {Username, content} = req.body;
    let id = uuidv4(); //to create a random id, we use it.
    posts.push({ id, Username, content });

    res.redirect("/posts")
});

app.get('/posts/:id', (req, res) => {
    let id = req.params.id;
    let post = posts.find((p) => id === p.id);
    if(post){
        res.render("showPost.ejs", { post });
    }else{
        res.send("<h1>Enter a valid ID</h1>");
    }
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
