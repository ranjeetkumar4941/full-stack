let a=5;
function add(){     // function definition
    console.log(a+5);
    console.log(a);
}
add();      // function call

// prac qs
function rollDice() {
    let dice = Math.ceil(Math.random()*6);
    console.log(dice);
}
rollDice();

// Arguments in function
function info(name, age){   //Arguments
    console.log(`${name}'s age is ${age}`);
}
info("Ranjeet", 21);    // Parameters
info("Ranjeet");        // here, we pass only one value so second will assign undefined
info(21);               // in function, order wise things run 

// return keyword in function
function add(a,b){
    return a+b;
}
console.log("sum: ",add(7,6));

// prac qs
function concat(array){
    let result="";
    for(let i=0; i<array.length; i++){
        result += array[i];
    }
    return result;
}
let arr=["Hi", "i", "am", "going."];
console.log(concat(arr));

// lexical scope
function outer(){
    let n1=5;
    function inner(){
        let n2=6;
        console.log(n1);
    }
    // console.log(n2);     // it can not access because lexical scope
    inner();
}
outer();
// inner();     // here error will generate because outside the function

// function expression
let variable = function(){      // second method to define a function
    console.log(4+6);
}
variable();     // to call using variable name

// higher order function
function mulptiplegreet(func, n){   // passing function as argument
    for(let i=1; i<=n; i++){
        func();
    }
}
let greet = function(){
    console.log("Hello");
}
mulptiplegreet(greet, 4);
mulptiplegreet(function(){console.log("namaste")},3)

// return a function
function oddEvenTest(request){
    if(request == "odd"){
        return function (n){
            console.log(n%2 != 0);
        };
    }
    else if(request == "even"){
        return function (n){
            console.log(n%2 == 0);
        };
    }
    else{
        console.log("wrong choice");
    }
}
let req= "odd";
let check=oddEvenTest(req);
console.log(check);
check(5);

// method
const calculator= {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    multi: function(a,b){
        return a*b;
    }
}
console.log(calculator);
console.log(calculator.add(3,6));

// method (shorthand)
const calc={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}
console.log(calc);
console.log(calc.sub(9,4));

// QS & Ans
// qs1
let qs1= [4,8,4,7,9,5,3,,2,6,2];
let num1=5;
function largerElement(arr, num){
    let temp=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>num){
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(largerElement(qs1, num1));

// qs2
let qs2= "guohfeiuhigehj";
function checkUniChar(str){
    let temp="";
    for(let i=0; i<str.length; i++){
        if(temp.indexOf(str[i])== -1){
            temp += str[i];
        }            
    }
    return temp;
}
console.log(checkUniChar(qs2));

// qs3
let qs3= ["Australia", "Germany", "USA"];
function longestName(arr){
    let temp=arr[0];
    for(let i=1; i<arr.length; i++){
            if(arr[0].length<arr[i].length){
                temp=arr[i];
            }
    }
    return temp;
}
console.log(longestName(qs3));

// qs4
let qs4= "tyjggfgefhairtyujtwtj";
function countVowel(str){
    let count=0;
    for(let i=0; i<str.length; i++){
        if(str.charAt(i) == "a" ||
        str.charAt(i) == "e" ||
        str.charAt(i) == "i" ||
        str.charAt(i) == "o" ||
        str.charAt(i) == "u" ){
            count++;
        }
    }
    return count;
}
console.log(countVowel(qs4));

// qs5
let start=1;
let end=10;
function randomNum(start,end){
    let qs5= Math.ceil(Math.random()*10);
    return qs5;
}
console.log(randomNum(start,end));

