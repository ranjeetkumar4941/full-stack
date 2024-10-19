let express = require("express"); // it return a function 
let app = express(); // express function returns an object
// console.log(express);
// console.log(app);

const port=3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});