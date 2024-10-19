// we follow all instruction and copy code from npmjs websites
const figlet = require("figlet"); // For require package, we write only package name

figlet("Hello", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });