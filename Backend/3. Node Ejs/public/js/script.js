let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let username = inp.value;
    if (username !== "") {
        alert(`Hello ${username}`);
    }else{
        alert("Please enter your name");
    }
    inp.value = "";
});