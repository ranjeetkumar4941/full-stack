let first=require("./first");
let script=require("./script");
let app=require("./app");
console.log(first);
console.log(script);
console.log(app);
const obj = {
    1: first,
    2: script,
    3: app
}
module.exports=obj;
