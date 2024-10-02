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
 