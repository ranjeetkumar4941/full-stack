// async keyword: it is used to create an async function
async function sayHello() {
    return "Hello"; // bydefault it always returns promise
}
console.log(sayHello());
let say=async () => {
    // throw "user generated error";
    return "say";
}
console.log(say());
// we can apply then & catch method 
say()
    .then((result) => {
        console.log("Resolved");
        console.log("Data is ",result);
    }).catch((err) => {
        console.log("Rejected");
        console.log("ERROR:",err);
    });

// await keyword: it is used to pause the execution of all sorrounding async function until 
// its promise is settled as resolve or rejected
function printRandomNumber(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.ceil(Math.random()*10);
            console.log(num);
            resolve();
        },1000)
    })
};
let callfunc= async () => {
    await printRandomNumber();
    await printRandomNumber();
    await printRandomNumber();
    await printRandomNumber();
    printRandomNumber();
}
// callfunc();

let heading=document.querySelector("h1");
function colorChange(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            heading.style.color=color;
            resolve();
        },delay)
    })
}
async function Changer() {
    await colorChange("red",1000);
    await colorChange("orange",1000);
    await colorChange("brown",1000);
    colorChange("blue",1000);
}
Changer();

// Handling rejection with await
let getnum = () => {
    return new Promise((resolve, reject) => {
        let num=Math.ceil(Math.random()*10);
        setTimeout(() => {
            if(num>4){
                console.log(num);
                resolve();
            }else{
                reject("Error Caught: Promise rejected");
            }
        },1000)
    });
}
async function printnum() {
    // await getnum();
    // await getnum();
    // await getnum();
    // await getnum();
    try{
        await getnum();
        await getnum();
        await getnum();
        await getnum();
    }catch(err){
        console.log(err); 
    }
    console.log("After await");
    console.log("execution");
    
};
printnum()
