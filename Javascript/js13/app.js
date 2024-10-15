
// Axios 
let btn=document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact=await getFact();
    let picUrl=fact.data[0].url;
    document.querySelector("img").src=picUrl;
})
let URL="https://api.thecatapi.com/v1/images/search"
async function getFact() {
    // we use axios.get() instead of fetch() because it directly returns onject
    // while fetch returns promise and we had to parse it for get data 
    try {
        let fact=await axios.get(URL);
        return fact;
    } catch (error) {
        console.log(error);
        return "Picture not found";
    } 
}

// header with axios
let link="https://icanhazdadjoke.com/"
async function getjoke() {
    const config={headers: {Accept : "application/json"}} // it will be an object
    // without header it will return html file so we use header to add additional info like change in json 
    let joke = await axios.get(link,config);
    return joke.data.joke;
}
let button=document.createElement("button");
button.innerText="Show joke";

let body=document.querySelector("body");
body.appendChild(button);
body.addEventListener("click",async (event) => {
    if(event.target.innerText == "Show joke"){
        let joke=await getjoke();
        let p=document.createElement("p");
        p.innerHTML=joke;
        button.insertAdjacentElement("afterend",p);
    }
    
})

