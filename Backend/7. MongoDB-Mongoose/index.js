const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/myapp");

main().then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Connection error", err);
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/myapp");
};