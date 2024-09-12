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






