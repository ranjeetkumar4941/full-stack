const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // it parse only url-encoded data
app.use(express.json()); // it parse json data

app.get('/register', (req, res) => {
  res.send(`<h1>This is a GET request for the register page</h1><h3>Hello @${req.query.user}. Your password is ${req.query.password}</h3>`);
});

app.post('/register', (req, res) => {
    res.send(`<h1>This is a POST request for the register page</h1><h3>Hello @${req.body.user}. Your password is ${req.body.password}</h3>`);
    // in post request, we acces our data from body
    console.log(req.body); //it gives us undefined as output
    //here, express don't know that which type of data we are sending, so we need to use middleware to parse the body. see line 5 
    
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});