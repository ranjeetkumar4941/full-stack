const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

let posts = [
    {
        Username: "John",
        content: "This is my first post",
    },
    {
        Username: "Jane",
        content: "Today is a great day!",
    },
    {
        Username: "Doe",
        content: "This is a sample post",
    },
    {
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
    posts.push({ Username, content });
    res.render('index.ejs', { posts });
});
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
