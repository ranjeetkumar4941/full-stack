// QS1
let scroll =document.querySelector("h3+div");
scroll.addEventListener("mouseout",() => {
    console.log("scrolling");
    
})
scroll.addEventListener("keypress",() => {
    console.log("keypressed");
    
})

// QS2
let colorChangeBtn = document.querySelector("h3+button");
colorChangeBtn.addEventListener("click", () => {
    colorChangeBtn.style.backgroundColor="green";
})

// QS3
let input = document.querySelector("input");
let h2 = document.querySelector("h2");
input.addEventListener("input", (event) => {
    if(("a"<=event.data && "z">=event.data) || ("A"<=event.data && "Z">=event.data) || event.data==" "){
        h2.innerText=input.value;
        
        
    }
    console.log(input.value);
})
