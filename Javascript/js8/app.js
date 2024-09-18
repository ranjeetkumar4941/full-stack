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




