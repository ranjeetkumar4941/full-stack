// Dom events: when we perform any action like click or input is called event
// For ex:- 
let btn=document.querySelector("button");
btn.onclick= () => {alert("Hello")};

// onclick: when we click at our element
let sumbtn=document.querySelector("#sum");
sumbtn.style.backgroundcolor="green";
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
})

divclass.addEventListener("click", () => {
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let Color=`rgb(${r},${g},${b})`;
    divclass.style.backgroundColor=Color;
});
