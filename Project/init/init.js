const mongoose = require('mongoose');
const listing = require("../models/listing.model");
const data = require("./data");

main().then(() => {
    console.log("Connected to DB...");
}).catch((err) => {
    console.error(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/mystay');
}

async function initDB() {
    await listing.deleteMany({});
    listing.insertMany(data.data).then(()=> {
        console.log("Data inserted...");
        
    }).catch((err) => {
        console.error(err);
        
    })
}

initDB();
