let express = require("express"); // it return a function 
let app = express(); // express function returns an object
// console.log(express);
// console.log(app);
const port=3000;
// for listen request we use listen method which takes port and callback as argument. it listen continuously
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// handling request
// it is used for all request & no path takes as argument. it takes all request
// app.use((req, res) => {
//     console.log("Request received");
// })
// app.get("/",(req, res) => {
//     console.log("get request")
// })
// app.get("/home", (req, res) => {
//     console.log("get request to /home");
// })

// sending a response: we use res object for response with send()
// app.use((req, res) => {
//     res.send("Hello, this is root");
//     // res.send({name: "Rahul", age: 21})
// })

// Routing: it selects a route
// app.get("/",(req, res) => {
//     res.send("It is root and received to get")
// });
// app.get("/array",(req, res) => {
//     res.send([1,2,3,4,5]);
// })
// app.get("/apple", (req, res) => {
//     let apple={
//         name: "Apple",
//         color: "red",
//         state: "Solid"
//     }
//     res.send(apple);
// });
// app.post("/post&html", (req, res) => {
//     let htmlstr="<h1>It is Heading</h1>";
//     res.send(htmlstr);
// })
// app.get("*",(req, res) => {
//     res.send("This path does not exist");
// })

// Path parameters
// app.get("/:username", (req, res) => {
//     // console.log(req.params);
//     let {username} = req.params;
//     res.send(`Hii @${username}, Welcome to your profile.`);
// });
// app.get("/:username/:password", (req, res) => {
//     let {username, password} = req.params; // name will be same as well as in path
//     res.send(`Hi @${username}, Your password is ${password}.`)
// });

// query string
app.get("/search", (req, res) => {
    // console.log(req.query);
    let {q} = req.query;
    console.log(q);
    
    if(!q){
        res.send("Nothing searched!")
    }else{
        res.send(`You searched ${q}`);
    }
})