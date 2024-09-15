// js object literals
let info ={
    name : "ranjeet",
    dept : "bca",
    rollno : 147
};
console.log(info);  // usually we define object literal as const
const student = {
    name : "rohit",
    rollno : 57,
    marks : 54.67
};
console.log(student);
const item = {
    price : 5646,
    discount : 53,
    colors : ["red","yellow"]
}
console.log(item);

// creating a post 
const post = {
    username: "@ranjeet35",
    content: "This is my id.",
    likes: 3844,
    reposts: 45,
    tags: 63
};
console.log(post);

// get values
console.log(post["username"]); //in js keys automatically changed into string
console.log(post.username);

// add/update value
const student1 = {
    name: "ranjeetkr",
    age: 21,
    marks: 94.4,
    city: "delhi"
};
console.log(student1);
student1.city = "mumbai"; // to update value
console.log(student1);
student1.gender = "Male"; // to add a new key property
console.log(student1);
delete student1.marks;
console.log(student1);

// nested object
const classInfo={
    ranjeet : {
        grade: "A",
        city: "delhi"
    },
    rahul : {
        grade: "a+",
        city: "kolkata"
    },
    suraj : {
        grade: "a+",
        city: "mumbai"
    }
}
console.log(classInfo);
console.log(classInfo.rahul.city);


// Array of object
const arr =[
    {
        name: "amit",
        city: "delhi"
    },
    {
        name: "aryan",
        city: "ambala"
    },
    {
        name: "karan",
        city: "pune"
    }
]
console.log(arr);
console.log(arr[0].city);

// math object
console.log(Math.abs(-9)); // it returns always positive value
console.log(Math.pow(2,5)); // it return power value of first value
console.log(Math.floor(4.9)); // it round of value to less than or equal value to original value
console.log(Math.ceil(4.9)); // it round of value to greater than or equal value to original value
console.log(Math.random()); // it returns a random value between 0 to 1 except 1
console.log(Math.random());
console.log(Math.random());

// generate a random number
let num = Math.random();
// 1 to 10
num *= 10;
num = Math.floor(num);
num += 1;   // without this line number wil generate between 0 to 9
            // but we need 1 to 10 so we use thin line 
console.log(num);
// 1 to 100
let num1 = Math.floor(Math.random()*100)+1
console.log(num1);
// 1 to 5
let num2 = Math.floor(Math.random()*5)+1
console.log(num2);
// 21 to 25
let num3 = Math.floor(Math.random()*5)+21
console.log(num3);

// guessing number game
let inp = parseInt(prompt("Enter maximum range(1 to ...)"))
let calculate = Math.floor(Math.random()*inp)+1;
let guess;
if(inp){
    guess = prompt("Enter number which you guess:");
}
while(guess && guess != "quit"){
    guess = parseInt(guess);
    if(guess == calculate){
        alert("Congrats! you win.");
        let decision = prompt("Do you want ot play again.(Y/N)");
        if(decision == "Y" || decision == "y"){
            inp = parseInt(prompt("Enter maximum range(1 to ...)"))
            calculate = Math.floor(Math.random()*inp)+1;
            if(inp){
                guess = prompt("Enter number which you guess:");
            }
        }else{
            break;
        }
        
    }else{
        if(inp>10){
            if(guess>calculate ){
                alert("Hints: Think smaller.");
            }
            else{
                alert("Hints: Think greater.");
            }
        }
        guess = prompt("Wrong! Please try again or quit.")
    }
}

