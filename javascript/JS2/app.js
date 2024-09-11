console.log("Hello");

// Template literal
let apple = 48;
let mango = 45;
let a=5;
let b='5';
console.log(a!=b);
// console.log("Total price is", apple+mango,"rupees");
console.log(`Total price is : ${apple+mango} rupees`);
// `` -> back tick

// else if
let size="L";
if(size === "XL"){
    console.log("Price is 200");
}
else if(size==="L"){
    console.log("Price is 250");
}
else if(size==="M"){
    console.log("Price is 150");
}
else{
    console.log("price is 100");
}

// practice qs
let str="apple";
if(str[0]=='a' && str.length>3){
    console.log("Good string");
}
else{
    console.log("Bad string");
}

// alert & prompt

// alert("Something is wrong");
// prompt("hello");

let fName=prompt("Enter first name: ");
let lName=prompt("Enter last name: ");
let result="welcome "+fName+" "+lName+"!"
alert(result);
