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

// constructor function example
// note: Constructor functions name should start with a capital letter and it does not return anything
function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// to create prototype methods, we use the prototype property
// this allows all instances of Person to share the same method, saving memory
Person.prototype.introduce = function() {
    console.log(`Hi, I am ${this.name}.`);
}
// creating objects using the constructor function
let p1 = new Person('Charlie', 35); //we create objects using the new keyword
let p2 = new Person('Diana', 28);
console.log(p1.introduce === p2.introduce); // Output: true, because introduce is a prototype method shared by all instances of Person

// class example
// we use the class keyword to define a class in JavaScript
class Animal {
    constructor(name, species) { // in classes, to create a constructor, we use the constructor method
        this.name = name;
        this.species = species;
    }
    speak() {
        console.log(`${this.name} says hello!`);
    }
}

let dog = new Animal('Buddy', 'Dog');
let cat = new Animal('Whiskers', 'Cat');
console.log(dog.speak === cat.speak); // Output: true, because speak is a method defined in the Animal class prototype

// Inheritance example
class Human{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} says hello!`);
    }   
}
// we use the extends keyword to inherit from another class
// The subclass (Student) inherits properties and methods from the superclass (Human)
class Student extends Human { 
    constructor(name, age, marks) {
        // this.name = name;
        // this.age = age;
        // we use super() to call the constructor of the superclass which contains the properties we want to inherit like name and age
        super(name, age); 
        this.marks = marks;
    }
    study() {
        console.log(`${this.name} is studying.`);
    }
}

let student1 = new Student('Eve', 20, 90);
let student2 = new Student('Frank', 22, 85);
console.log(student1);

class teacher extends Human {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    teach() {
        console.log(`${this.name} is teaching ${this.subject}.`);
    }  
}

let teacher1 = new teacher('Grace', 40, 'Math');
let teacher2 = new teacher('Hank', 45, 'Science');
console.log(teacher1);