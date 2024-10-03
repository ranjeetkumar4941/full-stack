// call stack
function greeting(){ // it will go last in call stack but execute first
    console.log("Hello!");
    console.log("greeting");
}
function callgreet(){
    console.log("greeting() is calling");
    greeting();
    console.log("callgreet done");
}
function demo(){ // it will go first in call stack but executes in last
    console.log("callgreet is calling");
    callgreet();
    console.log("demo done");
}
console.log("demo is calling");
demo()


// callback hell
let h1= document.querySelector("h1");
function colorChange(color,delay,nextColorChange){
    setTimeout(() => {
        h1.style.color=color;
        if(nextColorChange) nextColorChange();
    },delay)
};
// below, there is nested callback which is not easy to understand it is called callback hell
colorChange("red",1000,() => {
    colorChange("orange",1000,() => {
        colorChange("brown",1000,() => {
            colorChange("blue",1000);
        });
    });
});

// setting up for promises
function saveToDB(success, failure){
    let networkSpeed=Math.floor(Math.random()*10)+1;
    if(networkSpeed > 4){
        success();
    }else{
        failure();
    }
}
saveToDB( // it is callback hell
    () => {
        console.log("Data was saved");
        saveToDB(
            () => {
            console.log("Data2 was saved");
            saveToDB(
                () => {
                    console.log("Data3 was saved"); 
                },
                () => {
                    console.log("failure: Data3 was not saved");
                }
            );   
            },
            () => {
                console.log("failure: Data2 was not saved");
            }
        );
    },
    () => {
        console.log("Weak connection: Data was not saved");
    }
);
 
// promises
function saveData(data){
    return new Promise((resolve, reject) => { // resolve and reject will pass in every time when we return promise
        let networkSpeed=Math.floor(Math.random()*10)+1;
        if(networkSpeed > 4){
            resolve("Success: solved problem");
        }else{
            reject("Failure: Not Solved problem");
        }
    })
}
// console.log(saveData("hello"));

// then and catch
saveData("Hello world")
    .then(() => { //after success, if we want to do anything then we use .then which takes a callback
        console.log("promise resolved");
        
    })
    .catch(() => { // after failure, if we want to do anything then we use .catch which also takes a callback
        console.log("promise rejected");
        
    });

console.log("Promise Chaining");
    
// promise chaining 
saveData("data1")
    .then((result) => { // result is the value of resolve function's parenthesis 
        console.log("data1 stored");
        console.log(result);
        
        return saveData("data2"); // for chaining we return function call which works as a function call for next then
    })
    .then((result) => {
        console.log("data2 stored");
        console.log(result);
        return saveData("data3");
    })
    .then((result) => {
        console.log("data3 stored");
        console.log(result);
    })
    .catch((error) => { // error is the value of reject function's parenthesis
        console.log(error);
        console.log("Remaining Data not stored");
    })

// creating color changer code like 'h1' but using 'promise' not 'callback hell'
let h3=document.querySelector("h3");
function h3ColorChanger(color, delay){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            h3.style.color=color;
            resolve(color);
        }, delay);
    })
}
h3ColorChanger("blue",1000)
    .then((result) => {
        console.log(result);
        return h3ColorChanger("red", 1000);
    })
    .then((result) => {
        console.log(result);
        return h3ColorChanger("orange", 1000);
    })
    .then((result) => {
        console.log(result);
        return h3ColorChanger("brown", 1000);
    })
    .then((result) => {
        console.log(result);
    })