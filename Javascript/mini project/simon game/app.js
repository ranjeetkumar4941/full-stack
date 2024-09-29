let gameSeq=[];
let userSeq=[];

let level=0;
let started=false
let boxcolor=["green", "orange", "pink", "yellow"]
document.addEventListener("keypress", function(){
    if(started == false){
        started=true;
        levelup();
    }
})
function levelup(){
    level++;
    let h3=document.querySelector("h3");
    h3.innerText=`Level ${level}`;

    let randomidx=Math.floor(Math.random()*3);
    let btncolor=boxcolor[randomidx];
    let btn=document.querySelector(`.${btncolor}`);
    flash(btn);
}
function flash(btn){
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");
    },300);
}
function userflash(){
    // console.log(btn);
    let btn=this;
    this.classList.add("usergreen");
    setTimeout(function(){
        btn.classList.remove("usergreen");
    },300);
    
}
let btns=document.querySelectorAll(".box");
for(let btn of btns){
    btn.addEventListener("click", userflash);
}

