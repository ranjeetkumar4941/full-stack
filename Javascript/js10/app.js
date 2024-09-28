// Dom events: when we perform any action like click or input is called event
// For ex:- 
let btn=document.querySelector("button");
btn.onclick= () => {alert("Hello")};

// onclick: when we click at our element
let sumbtn=document.querySelector("#sum");
let body=document.querySelector("body");
sumbtn.onclick= () => {
    sumbtn.style.backgroundColor="green";
    let printpara=document.createElement("p");
    let a=Math.floor(Math.random()*10)+1;
    let b=Math.floor(Math.random()*10)+1;
    let c=a+b;
    // printpara.innerHTML= a; it will take input one value or a string
    printpara.append(a,"+",b,"=",c);// it will take input all thing at a time
    body.appendChild(printpara);
}

// onmouseenter: when we hover on our element then it work
let alertbtn=document.querySelector("#alert");
alertbtn.onmouseenter= ()=>{
    sumbtn.style.backgroundColor="red";
};
alertbtn.onmouseleave=()=>{
    sumbtn.style.backgroundColor = "white";
};

// EventListener: for listen event we use it
alertbtn.addEventListener("click",() => { // it takes two parameter first event and second callback
    alert("you click me.");
});

// alertbtn.addEventListener("mouseover",() => {
//     alert("You double click me.");
// })

// event listener on other element
let paragraph=document.querySelector("p");
paragraph.addEventListener("click", function(){
    alert("You clicked on paragraph");
});

let divclass=document.querySelector("div");
divclass.addEventListener("mouseenter", function(){
    paragraph.style.color="red";
});
divclass.addEventListener("mouseleave",() => {
    paragraph.style.color="black";
});
divclass.addEventListener("click", () => {
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let Color=`rgb(${r},${g},${b})`;
    divclass.style.backgroundColor=Color;
});

// this keyword in EventListener
let h1=document.querySelector("h1");
let h4=document.querySelector("h4");
let para=document.querySelector("#thispara");
let thisbtn=document.querySelector("#this");

function changeColor(){
    // this refers to that object which is call it.
    this.style.color="blue";
    console.log(this);
    
}
h1.addEventListener("click", changeColor);
h4.addEventListener("click", changeColor);
para.addEventListener("click", changeColor);
thisbtn.addEventListener("click", changeColor);


// when we add a eventlistener and pass a callback then this callback takes an argument.
// by default that argument will be an 'event'.
thisbtn.addEventListener("click",(event) => { // it tracks that which event is trigerred.ex- mouseevent, keyboardevent
    console.log(event);
})

// Keyboard event: 
// two most used keyword event are keyup and keydown.
// keydown: when we press any key on keyboard means it goes down
// keyup: when we press and release that key then it trigerred means it goes up
let input=document.querySelector(".keyboardEvent input");
input.addEventListener("keydown",(event) => {
    console.log(event); //we use 'event' to access their property 
    console.log(event.code); // code property returns us code of that key which we type by our keyboard
    console.log(event.key); // key property returns the value which we type
});
input.addEventListener("keyup", (e) => {
    console.log(e);
})

// for exercise
let inp = document.querySelector("h2+input");
let exePara = document.querySelector("#exercise");
inp.addEventListener("keydown", (e) => {
    let keyword = e.key;
    exePara.append(keyword);
})

// form event
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // it is used to prevent to go another page or link after submit
})

// Extracting form data
form.addEventListener("submit", (e) => {
    let forminp=document.querySelector("p+input");
    console.log(forminp.value); // it is used to take value which we give in form
    
})
let tempform = document.querySelector("#signin");
tempform.addEventListener("submit", function (event){
    event.preventDefault();
    // let inp1=document.querySelector("#user");
    // let inp2 = document.querySelector("#pass");
    //  it may many so we don't use queryselector, we use property of form which is element
    console.dir(this);
    let inp1 = tempform.elements[0];
    let inp2 = this.elements[1];
    console.log(inp1.value);
    console.log(inp2.value);
})

// More events
let takeInp= document.querySelector("#ewsk");

takeInp.addEventListener("change", function(){ // it track only initial and last changes
    console.log(takeInp.value);
})
takeInp.addEventListener("input", function(){ // it track every changes in value and it doesn't track any special keys
    console.log(takeInp.value);
})
// exercise
let output= document.querySelector("#exer");
takeInp.addEventListener("input", function(){
    output.innerHTML = takeInp.value;

})