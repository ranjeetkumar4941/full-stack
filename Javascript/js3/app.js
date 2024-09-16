// trim method
let str = "     Hello      ";
console.log(str);
let newStr = str.trim();    
//it does not affect main value it creates a new string

console.log(newStr);    
console.log(str);   
//in js, string is immutable so it wiil not change

// String method
let str2 = "  hello";
console.log(str2.toLowerCase());
console.log(str2.toUpperCase());
console.log(str2.indexOf('l'));
console.log(str2.replace("lo", "to"));

console.log(str2.trim().replace('l','t'));
console.log(str2.repeat(5)," ");
let str1 = "kaise ho aap!"
console.log(str1.slice(4));     //it will print from 4 to end
console.log(str1.slice(6, 10)); //it will print from 6->9
console.log(str1.slice(-3));    //it will change (-3) -> (length-3)

// Array
// creation of array
let Name=["rahul", "rajat", "amit"];
let marks=[87,98,78,98,67,89];
let info=["rahul", 1322148, 22]; // we can create a mix array
let a=[]; // we can create an empty array 
console.log(Name);
console.log(marks);
console.log(info);

console.log(Name[1][2]); 
// first bracket refer to array index and 
// second bracket refer to character of that array

let fruits=["apple","mango", "papaya"];
console.log(fruits);
fruits[0]="banana";     // arrays are mutable in js so it can be change
console.log(fruits);    

// in js, size of array doesn't fix
fruits[10]="guava";
fruits[7]="litchi";
console.log(fruits); //here some empty place will be print

// Array method
// when we don't know length of array then we use some method 
// to insert and delete element in array.For example:-
let cars=["audi", "bmw", "hyundai"];

// to add from end
cars.push("toyota");
console.log(cars);

// to delete from end
let endDelete=cars.pop(); // it also return that value which delete it
console.log(cars);

// to add from start
cars.unshift("ferrari");
console.log(cars);

// to delete from start
let startDelete=cars.shift();
console.log(cars);

// indexof:- it return index of first occurance
let num = [1,2,3,4,5];
console.log(num.indexOf(3));

// include:- it used for search a value and it returns boolean value
console.log(num.includes(7));
console.log(num.includes(4));


// concat:- it is used for add merge two array
let num2 = [6,7,8,9,10];
console.log(num.concat(num2)); //here num will print first after that num2 will print 
console.log(num2.concat(num)); // here num2 will priht first after that num will print 

// reverse:- it is used for reverse any array 
console.log(num.reverse());
console.log(num);   // and it change the original value of array also

// splice:- it is used to remove/slice/add/replace element in array
// we pass argument as follow:-
// array.splice(startingPoint, deletecount, additem1,....,additemn)
let result=num2.splice(3); //if we pass one argument it works like slice method
console.log(result);    // it return that value which slice it
console.log(num2);      // it changes actual value of array 

let number=[11,12,13,14,15,16];
// if we want to delete 13 then
number.splice(2,1); //here 2 is index where we perform deletion and 1 shows how many number will delete
console.log(number); // o/p - 11,12,14,15,16
// if want to delete 11 and add 8,9,10,11 then
number.splice(0,1,8,9,10,11); // 0 is index of array, 1 is number of delete and others are item that we want to add
console.log(number); // o/p- 8,9,10,11,12,14,15,16
// if want to add 13 between 12 and 14 then
number.splice(5, 0, 13);
console.log(number);

// sort
let names=["rahul", "amit", "saunik"];
names.sort();
console.log(names);
let arr=[23, 45,100 ,20, 30, 76]; // number will not sort because before sort it change it into string
arr.sort();
console.log(arr);

// array reference
let ARR=[3];
let NARR=[3];
console.log(ARR==NARR); // it returns false, in js, array store reference of variable not actual value 

let nArr=ARR;
nArr.push(5);
console.log(nArr);
console.log(ARR); // it will also change because both have same reference value
// solution is that we have to create a new array 

// const array
const conArray=[1,2,3];
conArray[3]=5;
console.log(conArray); // it will change because it reference value will be constant not their actual value 
// conArray=[3,4,5];    // but we can't change whole array it will occur error

// nested array
let nesarray=[[1,2],[3,4],[5,6]];
console.log(nesarray);
// to access
console.log(nesarray[2][0]);

// js3 QS & Ans
// qs1
let q1=[7,9,0,-2];
n1=3;
console.log(q1.slice(0,3));

// qs2
console.log(q1.slice(-3));

// qs3
let qs3= "";
if(qs3 != 0){
    console.log("String is not blank");
    
}else{
    console.log("String is blank");
    
}

// qs4
let qs4= "HellO World!";
let n4= 2;
if(qs4[n4] === qs4[n4].toLowerCase()){
    console.log(`${qs4[n4]} is in lowercase.`);
    
}else{
    console.log(`${qs4[n4]} is not in lowercase.`);
}

// qs5
let qs5= "   love coding    ";
console.log("Before trim: ");
console.log(qs5);
console.log("After trim:");
console.log(qs5.trim());

// qs6
let qs6=[2,6,8,3,9];
n6=8;
if(qs6.indexOf(n6) == -1){
    console.log(`${n6} is not exist.`);
    
}else{
    console.log(`${n6} is exist.`);
    
}


