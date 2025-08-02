// Object prototype example
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
arr1.print = function() {
    console.log(this);
}
arr2.print = function() {
    console.log(this);
}

console.log(arr1.print === arr2.print); 
// Output: false, because they are targeting different objects and have different references

console.log(arr1.push === arr2.push); 
// Output: true, because they are targeting the same method from the Array prototype

// factory function example
function createUser(name, age) {
    let user = {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
    return user;
};

let user1 = createUser('Alice', 30);
let user2 = createUser('Bob', 25);
user1.greet(); 
user2.greet();
