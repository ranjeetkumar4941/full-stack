// getElementById: to select element using id name and it returns object
let h=document.getElementById("mainImg");// we should pass value using "" otherwise it will behave like a variable
console.dir(h); // to print property of object
console.log(h.src);// to print source of image
// if we pass wrong id name then it will return null value
console.log(document.getElementById("gdss"));

// getElementsByClassName: it returns an html collection of objects
let classCollection=document.getElementsByClassName("oldImg");
console.log(classCollection);

for(let i=0; i<classCollection.length; i++){
    classCollection[i].src= h.src;
    console.log(`image of index of ${i} has changed.`);
}
// getElementByTagName: it also returns an html collection 
let tagCollection=document.getElementsByTagName("p");
// tagCollection[0].innerText="Hello";
console.log(tagCollection);
console.dir(tagCollection);

// querySelector: allows us to use any css selector
console.log(document.querySelector("p"));// select first p element
console.log(document.querySelector("#description")); // selects first element with this id
console.log(document.querySelector(".oldImg"));// selects first element with this class name
// it returns only first value so for getting all value, we use queryselectorall to access all value
console.log(document.querySelectorAll(".oldImg"));

// using properties & methods
let para=document.querySelector('p');
console.log(para.innerText);//shows the visible text contained in a node
console.log(para.innerHTML);// shoe the full markup
console.log(para.textContent);// show all the full text
para.innerText="<b>Hii</b>, How are you?";//here it will not print bold so we use innerhtml
console.log(para.innerText);
para.innerHTML="<b>Hii</b>, How are you?";
console.log(para.innerText);

