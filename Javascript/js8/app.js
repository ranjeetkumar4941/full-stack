// forEach method : this method executes that function for every element
let arr=[3,5,7,6,8];
let print= function(n){
    console.log(n);
}
arr.forEach(print);
arr.forEach((n) => {
    console.log(n); 
});

// map method : it returns a value which create a new array
let squareArr= arr.map((n) => { 
    return n*n;
});
let noReturn=arr.map((n) => { 
    n*2; // if it will not return any value then undefined will be assigned to new array
});
console.log(squareArr);
console.log(arr);
console.log(noReturn);

// filter method : it is same as map but it filter in our array depend on our function code
let num= [1,2,3,4,5,6];
let even= num.filter((n) => {
    return n%2 ==0;
});
console.log(even);

// every method : it is similar to logical and(&) 
// if our function is true for every element then it returns true otherwise false
let e=[2,4,6,8];
let check=e.every((n) => (n%2 == 0));
console.log(check);//true
let e2=[2,4,6,8,9];
console.log(e2.every((n) => (n%2==0)));

//some method: it works like logical or(|)
console.log(e2.some((n) => (n%2 != 0)));

// reduce method: it return a single value and callback takes two argument
let el= [1,2,3,4,5];
let sum= el.reduce((res, n) => (res+n));
console.log(sum);
let maximum = [3,8,9,7,8,4].reduce((max, n) => {
    if(max<n){
        return n;
    }else{
        return max;
    }
});
console.log("Maximum: ", maximum);

// Practice qs
let randomnum=[10,20,30,40];
console.log(randomnum.every((n) => (n%10==0)));

let minimum=[56,45,774,5,68,5654,58].reduce((min, n) => {
    if(min<n){
        return min;
    }else{
        return n;
    }
})
console.log("Minimum: ",minimum);

// default argument
function fun(a,b=5){
    console.log("Sum is : ", a+b);
}
fun(5,4);
fun(7);

// spread: it used for expands our iterable like array and string
let str="HelloWorld!";
console.log(...str);    // we use three dot(...) for execute this
let a=[3,5,67,4,6];
function func(a){
    console.log(...a);
}
func(a)

// spread in array literals: used to copy an existing array
let arr1=[1,2,3,4,5];
let newA=[...arr1];
console.log(arr1);
console.log(newA);
let arr2=[6,7,8,9,10];
let newa1=[...arr1, ...arr2];
console.log(newa1);
let str1="lovecoding";
let newstr=[...str1];
console.log(newstr);

// spread in object literal: used for copy an object and add additional property
const data={
    username: "ffsg23",
    password: "2ddf"
};
let datacopy= {...data}; //copy object
console.log(datacopy);
let additionalprop= {...data, name: "aman"}; // copy and add property
console.log(additionalprop);
let anarr=[1,2,3,4,5];
let arrobj={...anarr}; // in case of array index will be key, value of array will be value and same in string
console.log(arrobj);

// rest: it is opposite to spread and use with function as arguments that takes multiple number of arguments
function print1(...args){
    for(let i=0; i<args.length; i++){
        console.log(`argument ${i+1} is ${args[i]}` );
    }
}
print1(4,5,7,5,4,4,5,6,7);

function Min(...args){
    return args.reduce((min, n) => {
        if(min<n){
            return min;
        }else{
            return n;
        }
    })
}
console.log(Min(7,4,7,8,5,3,2,3,5,6,7));

// destructuring: it stores array's value into variables
let names= ['peter','john','tony','bruce'];
// let winner=names[0];
// let runnerup=names[1];
// in this method there are multiple lines so we use below method
let [winner, runnerup]= names;
console.log(winner);
console.log(runnerup);
let number =[1,3,4,5,7,5,4];
let [first, second, ...others]=number;//we can use rest to store other value in a single 
console.log(first);
console.log(second);
console.log(others);

// destructuring in object
const info={
    name: "amit",
    age: 21, 
    username: "wgfg213",
    password: "abc@"
};
let {username, password}=info; // we use {} to use it for object
console.log(`username: ${username}, password: ${password}`);
// if we want to change name of variable then
let {username: user, password: pass}=info;
console.log(`username: ${user}, password: ${pass}`);
// if property does not exist in object then we use default value with key or variable name
let {name, city="delhi"}=info;
console.log(city);
// if we want to change our default variable name
let {degree: dept="BCA"}=info;
console.log(dept);


