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