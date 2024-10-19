// Process & process.argv
// console.log(process.argv);
// let arr=process.argv; // it returns an array
// here we start printing from 2 because:
// [0]: it refers to path of node directory
// [1]: it refers to path of that directory which is executing
// for(let i=2; i<arr.length; i++){
//     console.log("Hello! ",arr[i]);
// }

// require file
// let appFileData=require("./app");
// console.log(appFileData);

// require Directory
let directoryData=require("./jsFile"); // it track index file which is similar to main() in c/c++
console.log(directoryData);

