// // odd number
// for(let i=1; i<=15; i+=2){
//     console.log(i);
    
// }
// // even number
// for(let i=2; i<=15; i+=2){
//     console.log(i);
    
// }
// // nested loop
// for(let i=1; i<=3; i++){
//     console.log(`row no ${i}`)
//     for(let j=1; j<=3; j++){
//         console.log(j);
        
//     }
// }

// table of a number
// let n = parseInt(prompt("Enter a number : "));
// for(let i=n; i<=n*10; i+=n){
//     console.log(i);
// }


// // guess favourite movie
// let fav = "avatar";
// let guess = prompt("Guess my favourite movie : ");
// while(guess != fav && guess != "quit"){
    
//     guess = prompt("Wrong! try again or quit : ");
// }
// if(guess == fav)
// alert("Congrats!");

// to do app
// let todo=[];

// let check = prompt("Enter your request : ");
// while(check && check != "quit"){
//     switch(check){
//         case "list":
//             console.log("-------------");
//             for(i of todo){
//                 console.log(i);
//             }
//             console.log("-------------");
//             break;
//         case "add":
//             let insert = prompt("Enter task : ");
//             let ind = parseInt(prompt("where you want to add, enter number : "));
//             todo.splice(ind-1,0,insert);
//             console.log("Task added");
            
//             break;
//         case "remove":
//             let Delete = prompt("Which task, you want to remove : ");
//             todo.splice(todo.indexOf(Delete),1);
//             console.log("Task removed");
//             break;
//         default:
//             alert("Wrong request. Please try again.");
//             break;
//     }
//     check = prompt("Enter your request : ")
// }

// js4 QS & Ans
// qs1
let qs1= [1,2,3,4,5,6,2,3];
let n1= 4;
console.log("Before delete: ");
console.log(qs1);

for(let i=0; i<qs1.length; i++){
    if(qs1[i] == n1){
        qs1.splice(qs1.indexOf(n1),1);
    }
}
console.log("After delete: ");
console.log(qs1);

// qs2
let qs2= 274656;
let count=0;

while(qs2>0){
    qs2=Math.floor(qs2/10);
    count++;
}
console.log("Digit: ", count);

// qs3
let qs3= 546545;
let sum= 0;
while(qs3>0){
    let digit= qs3%10;
    qs3=Math.floor(qs3/10);
    sum += digit;
}
console.log("Sum is ", sum);

// qs4
let qs4= 5;
let fact=1;
for(let i=1; i<=qs4; i++){
    fact *= i;
}
console.log("Factorial is ", fact);

// qs5
let qs5=[2,8,3,0,4,7,24,7];
let largest= 0;
for(let i=0; i<qs5.length; i++){
    if(qs5[i]>largest){
        largest=qs5[i];
    }
}
console.log("Largest number is ", largest);

