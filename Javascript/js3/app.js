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
