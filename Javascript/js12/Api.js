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

// Api request 
let api="http://catfact.ninja/fact";
fetch(api) //we use it to fetch info from api
    .then((response) => { //fetch returns promise so we use then to track it
        // console.log(response);
        return response.json();// to fetch actual data we use it and it also return promise
    })
    .then((result) => {
        document.querySelector("#btn1").addEventListener("click",() => {
            printFact1(result);
        })
        return fetch(api);
    })
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        document.querySelector("#btn2").addEventListener("click",() => {
            printFact2(result);
        })
    })
    .catch((err) => {
        console.log(err);
        
    })
function printFact1(res){
    let para = document.createElement("p");
    para.innerText=res.fact;
    document.querySelector("#fact1").insertAdjacentElement("afterend",para);
}
function printFact2(res){
    let para = document.createElement("p");
    para.innerText=res.fact;
    document.querySelector("#fact2").insertAdjacentElement("afterend",para);
}

// fetch with async & await
async function fetchData() {
    try {
        let response=await fetch(api);
        let data=await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
}
fetchData();