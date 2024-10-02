// Event bubbling
let div = document.querySelector("div");
let ul=document.querySelector("ul");
let lists = document.querySelectorAll("li");
// in this below situation if we clicked on list then ul and div also will triger
// to stop this we use event bubbling in which we use 'stopPropagation'
div.addEventListener("click", function (){
    console.log("div was clicked");
})
ul.addEventListener("click", function (event){
    event.stopPropagation();
    console.log("ul was clicked");
})
for(let list of lists){
    list.addEventListener("click", function (event){
        event.stopPropagation();
        console.log("list was clicked");
    })
}

// Event delegation
let ol=document.querySelector("ol");
let inpName=document.querySelector("#fruit");
let enterBtn=document.querySelector("#enter");

enterBtn.addEventListener("click", function(){
    let list=document.createElement("li");
    list.innerText=inpName.value;
    let deleteBtn=document.createElement("button");
    deleteBtn.innerText="Delete";
    list.appendChild(deleteBtn);
    ol.appendChild(list);
    inpName.value="";
});
ol.addEventListener("click",(event) => {
    console.log(event.target);// target means on which element we are perform operation 
    if(event.target.nodeName == "BUTTON"){ // nodeName means name of that element in capital letter
        let list = event.target.parentElement;
        list.remove();
    }
})
