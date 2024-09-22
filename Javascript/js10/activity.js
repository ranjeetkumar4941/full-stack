let btn=document.querySelector("button");
let heading=document.querySelector("h2");
let div=document.querySelector("#in");
btn.addEventListener("click",() => {
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let Color=`rgb(${r},${g},${b})`;
    heading.innerText=Color;
    div.style.backgroundColor=Color;
});
