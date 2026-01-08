// I AM USING COMPANY DB WHICH I CREATED IN OPERATION DIRECTORY 
const { log } = require('console');
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const mysql = require('mysql2');
const {v4 : uuidv4} = require('uuid');
const methodOverride = require('method-override');
const { resourceLimits } = require('worker_threads');

// setting view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true })); // to parse form data

app.use(methodOverride('_method'));

// creating connection with db
const connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    database: "company",
    password: "#Ranjeet4035"
});

// Home route
app.get("/", (req, res) => {
    try {
        let q= "SELECT COUNT(*) AS COUNT FROM user"; // here, i renamed COUNT(*) AS COUNT.
    connection.query(q, (err, result) => {
        if(err) throw err;
        let count = result[0].COUNT;
        res.render('home.ejs', {count});
        
    });
    } catch (error) {
        console.log(error);
        res.send("Error in DB.");
    }
});

//show all user route
app.get("/users", (req, res) => {
    try {
        let q = "SELECT id, username, email FROM user"; // we will not display password because it is sensitive information of a user
        connection.query(q, (err, result) => {
            if(err) throw err;
            res.render('show_users.ejs',{result});
            
        });
    } catch (error) {
        console.log(error);
        res.send("Error in DB.");
    }
    
});

// adding new user route
// UI for add user
app.get("/user", (req, res) => {
    res.render('newUser.ejs')
});
// store data in db
app.post("/user", (req, res) => {
    let data = [
        uuidv4(),
        req.body.username,
        req.body.email,
        req.body.password
    ];
    try {
        let q="INSERT INTO user VALUES (?,?,?,?)";
        connection.query(q, data, (err, result) => {
        if(err) throw err;
        // console.log(result);
        res.redirect("/");
    });
    } catch (error) {
        console.log(error);
        res.send("Error in DB.");
    }
    
    
});

// route for edit Username

// getting user data
app.get("/user/:id/", (req, res) => {
    let id = req.params.id;
    try {
        let q= `SELECT * FROM user WHERE id='${id}'`;
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render('editUsername.ejs', {user});
        });
    } catch (error) {
        console.log(error);
        res.send("Error in DB.");
    }
    
});
// updating data
app.patch("/user/:id", (req, res) => {
    let id = req.params.id;
    let {username, password} = req.body;
    try {
        let q1 = `SELECT * FROM user WHERE id = '${id}'`;
        connection.query(q1, (err, result) => {
            if(err) throw err;
            let dbpass= result[0].password;
            if(password == dbpass){
                try {
                    let q = `UPDATE user SET username='${username}' WHERE password='${password}'`;
                    connection.query(q, (err, result) => {
                        if(err) throw err;
                        res.redirect('/users');
                    });
                } catch (error) {
                    console.log(error);
                    res.send("Error in DB.");
                }
            }else{
                res.send(
                    `<script>
                    alert("Wrong Password!");
                    window.location.href = "/user/${id}";
                    </script>`
                );
            }
            
        });
    } catch (error) {
        console.log(error);
        res.send("Error in DB.");
    }
    
});

// Delete route
// geting form gor delete user
app.get("/delete/:id", (req, res) => {
    let id = req.params.id;
    try {
        let q= `SELECT * FROM user WHERE id='${id}'`;
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render('deleteUser.ejs', {user});
        });
    } catch (error) {
        console.log(error);
        res.send("Error in DB.");
    }
});

// deleting user in db
app.delete("/user/:id", (req, res) => {
    let id = req.params.id;
    let password = req.body.password;
    try {
        let q1 = `SELECT password FROM user WHERE id = '${id}'`;
        connection.query(q1, (err, result) => {
            if(err) throw err;
            if (password == result[0].password) {
                try {
                    let q2=`DELETE FROM user WHERE password='${password}'`;
                    connection.query(q2, (err, result) => {
                        if(err) throw err;
                        res.redirect("/users");
                    })
                } catch (error) {
                    console.log(error);
                    res.send("Error in DB.");
                }
            }else{
                res.send(
                    `<script>
                    alert("Wrong Password!");
                    window.location.href = "/delete/${id}";
                    </script>`
                );
            }
        })
    } catch (error) {
        console.log(error);
        res.send("Error in DB.");
    }
    
})
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${8080}`);
});