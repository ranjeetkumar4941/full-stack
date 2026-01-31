const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

// calling function to connect with DB
main().then(() => {
    console.log("Connected to DB...");
}).catch((err) => {
    console.error(err);
})
// DB connection function
async function main() {
  await mongoose.connect(process.env.Mongoose_URL);
}

app.get("/",async (req, res) => {
    data = await listing.find();
    res.send(data);
});


app.listen(port, () =>{
    console.log(`App is listening at ${port}`);
    
});
