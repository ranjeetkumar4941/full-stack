let api;
let btn=document.querySelector("button");// enter btn

// Event listener on button
btn.addEventListener("click",() => {
    let input=document.querySelector("input");
    api=`http://universities.hipolabs.com/search?country=${input.value}`;
    // disappear list 
    let lists=document.querySelectorAll("li");
    lists.forEach(element => {
        element.remove();
    });
    // disappear error
    if (document.querySelector("span+span")) {
        document.querySelector("span+span").remove();
    }
    // check input field is empty or not
    if(input.value){
        getName();
    }else{
        errorPrint("Not Found!");
    }
})
async function getName() {
    // for error handling
    try{
        // for access data from api
        await axios.get(api)
        .then((res) => {
            // check api validation
            if((res.data[0])){  
                data=res.data;
                // convert data into list
                data.forEach(element => {
                    let li=document.createElement("li");
                    li.innerHTML=`${element.name} <a href=${element.web_pages} target=_blank>Link</a>`;
                    document.querySelector("ul").insertAdjacentElement("beforeend",li);
                });  
            }else {
                errorPrint("Not Found!");
            }  
        });     
    } catch (error) {
        errorPrint(error);
    }
}
document.querySelector("input").addEventListener("click", function (){
    this.value="";
});
function errorPrint(err){
    let p=document.createElement("span");
    p.innerText=err;
    p.style.color="red";
    document.querySelector("ul").insertAdjacentElement("beforeend", p);
};