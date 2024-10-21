const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log("Server is running...");
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("This is root.")
})