const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// this is npm package and used to override method because form doesn't accept PATCH, PUT and DELETE req, form in HTML only accepts post and get request. So, we override method like post & get using it. 
const methodoverride = require("method-override");
app.use(methodoverride("_method"));

// it is npm package and used to create a random id for posts.
const { v4: uuidv4 } = require('uuid');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

// creating temporary posts for page as 'array of objects'
let posts = [
    {
        id: uuidv4(), // we call the function of uuid to generate a random ID.
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
// to get all post
app.get('/posts', (req, res) => {
    res.render('index.ejs', { posts});
});

// to create a new post
app.get('/posts/new', (req, res) => {
    res.render('newPost.ejs');
});

app.post('/posts', (req, res) => {
    let {Username, content} = req.body;
    let id = uuidv4(); //to create a random id, we use it.
    posts.push({ id, Username, content });
    res.redirect("/posts"); // we use it to link pages. it sends "get" request over this path- "/posts"
});

// To get detail of a post
app.get('/posts/:id', (req, res) => {
    let id = req.params.id;
    let post = posts.find((p) => id === p.id);
    if(post){
        res.render("showPost.ejs", { post });
    }else{
        res.send("<h1>Enter a valid ID</h1>");
    }
});

// To edit post
app.get("/posts/:id/edit", (req, res) => {
    let id = req.params.id;
    let post = posts.find(p => p.id === id);
    res.render("editpost.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let id = req.params.id;
    let content = req.body.content;
    let post = posts.find(p => p.id === id);
    post.content = content;
    res.redirect("/posts");
});

// To delete post
app.delete("/posts/:id", (req, res) => {
    let id = req.params.id;
    posts = posts.filter(p => p.id !== id);
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
