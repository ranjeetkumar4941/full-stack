// this keyword
const student={
    name: "Amit",
    rollno: 687,
    math: 56,
    eng: 76,
    phy: 89,
    getAvg: function(){
        console.log(this);  // it will print student because in a normal function 'this' refers to that object which call it
        
        console.log((this.math+this.eng+this.phy)/3);
    }
}
student.getAvg(56,76,89);

// try & catch
console.log("Hello");
console.log("Hello");
try{
    console.log(a);
} catch(err) {
    console.log(err);
}
console.log("Hello2");
console.log("Hello2");

// arrow function
let add=(a,b)=>{
    console.log(a+b);
}
add(3,6);

let cube= n => {   // when we have only one parameter then paranthesis is not compulsory
    return n**3;
}
console.log(cube(3));

let pow= () => {      // when we have no parameter then we can keep empty our paranthesis
    console.log(2**3);
}
pow();

// implicit return in arrow function
let mul= (a,b) => (     // when we just return value using function then we use it. 
    a*b    
);                      // in this method we use paranthesis not curlybresis
console.log(mul(2,4));

let addTwoNum= (a,b) => a+b;    // bracket is not compulsory when we just want to return value using arrow function
console.log(addTwoNum(3,6));

// set Timeout function
console.log("Hii Buddy");
setTimeout(() => {
    console.log("this is set Timeout function.");
    
}, 3000);
console.log("Welcome!");

// set interval function
// setInterval(() => {         // it will run infinite time
//     console.log("Hello world");
    
// }, 2000);
let id = setInterval(() => {    // it will not run infinite time because line 67
    console.log("Ranjeet");
    
},2000); 
clearInterval(id);

// this in arrow function
const student1= {
    name: "Rohit",
    marks: 76,
    prop: this, //it will refer to window because window call our student1 object 
    getname(){
        console.log(this);  // it will refer to our student1 because student1 will call it
        return this.marks;
    },
    getmarks: () => {
        console.log(this);  // it will refer to window because it refers to that object which call it parent
        return this.marks;
        
    }
}
console.log(student1.prop);
console.log(student1.getname());
console.log(student1.getmarks());

// prac qs
let Id=setInterval( () => {
    console.log("Hello");
    
}, 2000);
setTimeout( () => {
    clearInterval(Id);
}, 10000);



