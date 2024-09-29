let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let input=this.elements[0];
    let ul=document.querySelector("ul");
    let deletebtn=document.createElement("button");
    deletebtn.innerText="Delete";
    let list=document.createElement("li");
    list.innerHTML=input.value;
    if(input.value != ""){
        list.appendChild(deletebtn);
        ul.appendChild(list);
    }
    input.value="";
});

    let ul=document.querySelector("ul");
    ul.addEventListener("click", function(event){
        let list= event.target.parentElement;
        // console.dir(event.target);
        if (event.target.nodeName == "BUTTON") {
            list.remove();
        }
    })

