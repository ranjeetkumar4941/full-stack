let api;
let btn=document.querySelector("button");
btn.addEventListener("click",() => {
    let input=document.querySelector("input");
    api=`http://universities.hipolabs.com/search?country=${input.value}`;
    getName();

})
async function getName() {
    try{
        let list=await axios.get(api);
        data=list.data;
        data.forEach(element => {
            let li=document.createElement("li");
            li.innerHTML=`${element.name} <a href=${element.web_pages} target=_blank>Link</a>`;
            document.querySelector("ul").insertAdjacentElement("afterbegin",li);
    });
    } catch (error) {
        console.log(error);
    }
}
document.querySelector("input").addEventListener("click", function (){
    this.value="";
})


