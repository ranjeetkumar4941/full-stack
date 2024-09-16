// console.log("Hello");

// // Template literal
// let apple = 48;
// let mango = 45;
// let a=5;
// let b='5';
// console.log(a!=b);
// // console.log("Total price is", apple+mango,"rupees");
// console.log(`Total price is : ${apple+mango} rupees`);
// // `` -> back tick

// // else if
// let size="L";
// if(size === "XL"){
//     console.log("Price is 200");
// }
// else if(size==="L"){
//     console.log("Price is 250");
// }
// else if(size==="M"){
//     console.log("Price is 150");
// }
// else{
//     console.log("price is 100");
// }

// // practice qs
// let str="apple";
// if(str[0]=='a' && str.length>3){
//     console.log("Good string");
// }
// else{
//     console.log("Bad string");
// }

// // alert & prompt

// // alert("Something is wrong");
// // prompt("hello");

// let fName=prompt("Enter first name: ");
// let lName=prompt("Enter last name: ");
// let result="welcome "+fName+" "+lName+"!"
// alert(result);

// // Js part2(QS->Ans)
// // QS1
// let num = 230;
// if(num%10 == 0){
//     console.log("Good");
    
// }
// else{
//     console.log("Bad");
    
// }

// // QS2
// let uName = prompt("Enter name :");
// let uAge = prompt("Enter age :");
// alert(`${uName} is ${uAge} years old.`);

// // QS3
let monthQuarter = 3;
switch(monthQuarter){
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, Decrmber");
        break;
    default:
        console.log("Enter a valid number");
        break;
}

// QS6
let num1 = prompt("Enter first number :");
let num2 = prompt("Enter second number :");
if(num1%10 == num2%10){
    alert("last digit of both number is same");
    
}
else{
    alert("last digit of both number is not same");
}