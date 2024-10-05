// Accessing JSON data
// when we access json data bydefault it will be a string
let jsonData='{"fact": "A female cat is called a queen or a molly.","length": 42}';
console.log(jsonData);
// for change string json data into object we use JSON.parse(data)
let jsObj=JSON.parse(jsonData);
console.log(jsObj);
console.log(jsObj.fact);

const student={
    name: "Rohit",
    Mark: 87,
    Rollno: 466
}
console.log(student);
// for change our js object into JSON format we use JSON.stingify(obj)
let jsonStudent=JSON.stringify(student);
console.log(jsonStudent); // it will print string because in js json is string
