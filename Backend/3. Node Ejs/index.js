const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log("Server is running...");
});
// Using Ejs
// we don't require ejs because it requires automatically with express.
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("This is root.")
});
// we use render to send any file as response
app.get("/home", (req, res) => {
    res.render("home.ejs");// extension is not mandatory
});
// path is a package that comes with express and we need to require before use it.
const path = require("path");
// we set our view directory
app.set("views", path.join(__dirname, "/views"));
// here __dirname means ./backend/3. Node ejs & /views will embedd with it

// passing data to ejs file
app.get("/rolldice", (req, res) => {
    let value = Math.floor(Math.random()*6)+1;
    // we pass value as an object & key and value name can be same
    // res.render("rolldice.ejs", {diceValue: value}); // here, key and value name can same so we can write only key
    res.render("rolldice.ejs", {value});
})

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    res.render("instagram.ejs", {username});
});
// app.get("/search", (req, res) => {
//     let {q} = req.query;
//     res.render("instagram.ejs", {q});
// })

// conditional statement
app.get("/checknum/:num", (req, res) => {
    let {num} = req.params;
    res.render("home", {num});
})