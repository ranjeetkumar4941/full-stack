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
let todo=[];

let check = prompt("Enter your request : ");
while(check && check != "quit"){
    switch(check){
        case "list":
            console.log("-------------");
            for(i of todo){
                console.log(i);
            }
            console.log("-------------");
            break;
        case "add":
            let insert = prompt("Enter task");
            let ind = parseInt(prompt("where you want to add, enter number : "));
            todo.splice(ind-1,0,insert);
            console.log("Task added");
            
            break;
        case "remove":
            let Delete = prompt("Which task, you want to remove : ");
            todo.splice(todo.indexOf(Delete),1);
            console.log("Task removed");
            break;
        default:
            alert("Wrong request. Please try again.");
            break;
    }
    check = prompt("Enter your request : ")
}
