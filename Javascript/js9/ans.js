let body=document.querySelector("body");
// QS1
let btn=document.createElement("button");
let input=document.createElement("input");
console.dir(input);
input.placeholder="input";
btn.innerHTML="Click me";
body.append(btn);
body.append(input);

// QS2
input.placeholder="Username";
btn.setAttribute("id","btn");
// alert(btn.id)

// QS3
let button=document.querySelector("#btn");
button.style.backgroundColor="blue";
button.style.color="white";

// QS4
let heading= document.createElement("h1");
heading.innerText="DOM Practice";
body.append(heading);
heading.style.color="purple";

let p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";
body.append(p);