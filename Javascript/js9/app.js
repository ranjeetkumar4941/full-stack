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
// but we don't use it to add class name because it remove other class name

// using properties & methods
let para=document.querySelector('p');
console.log(para.innerText);//shows the visible text contained in a node
console.log(para.innerHTML);// shoe the full markup
console.log(para.textContent);// show all the full text
para.innerText="<b>Hii</b>, How are you?";//here it will not print bold so we use innerhtml
console.log(para.innerText);
para.innerHTML="<b>Hii</b>, How are you?";
console.log(para.innerText);

// manipulation attribute: used to get & set value of HTML attributes
let image=document.querySelector("img");
console.log(image.getAttribute("id"));// to get value of attribute
image.setAttribute("src","assets/creation_3.jpeg")// to set a new value of our attribute

// manipulating style
let heading=document.querySelector("h1");
console.log(heading.style);// to manipulate any style we use style object of that object
heading.style.color="red"; // manipulate in heading
heading.style.textDecoration="green dotted underline"
// manipulate in anchor tag which is in box
let anchor=document.querySelectorAll(".box a");
for(let link of anchor){
    link.style.color="purple";
}
console.log(heading.style.width); // it access or manipulate only inline css not others

// using classlist
let about = document.querySelector("h2");
console.log(about.classList);
about.classList.add("textcolor");//to add class name
about.classList.add("bgcolor"); 
about.classList.remove("bgcolor"); // to remove class name
about.classList.contains("bgcolor"); //to check class is exist or not
about.classList.add("width")
about.classList.toggle("bgcolor")//if element is exist then it will remove that if not exist then add that class name
about.classList.toggle("textcolor");
about.classList.toggle("textcolor");

// navigation
let box=document.querySelector(".box");
console.log(box.children);// to access children object and children can have multiple so it will collection
let ul=document.querySelector("ul");
console.log(ul.parentElement);// to access parent object
console.log(ul.previousElementSibling);// to access previous object
console.log(ul.nextElementSibling);// it will print null because it have no next sibling
console.log(heading.nextElementSibling);//to access next object
console.log(ul.children);

// adding element
let newpara=document.createElement("p");// to create an element
newpara.innerText="this is a new paragraph.";
let Box=document.querySelector(".box");
Box.appendChild(newpara);// to insert in page as child
newpara.append("and in the box");// to add content and element
let btn= document.createElement("button");
btn.innerText="click me";
newpara.append(btn);
let button= document.createElement("button");
button.innerText="Click!!!";
let button1= document.createElement("button");
button1.innerText="Click1!!!";
let button2= document.createElement("button");
button2.innerText="Click2!!!";
let button3= document.createElement("button");
button3.innerText="Click3!!!";
// to insert at specific place
Box.insertAdjacentElement("beforebegin", button);//before any element
Box.insertAdjacentElement("afterbegin", button1);//in any element but first
Box.insertAdjacentElement("beforeend", button2);// in any element but last
Box.insertAdjacentElement("afterend", button3);//after any element

// remove element
let body = document.querySelector("body");
let p=document.createElement("p");
p.innerText="this for temporary for remove."
body.appendChild(p);
let a=document.createElement("a");
a.innerText="This is not a link."
// these are written in the bottom of our page.
p.append(a);
p.removeChild(a);// it is similar to appendchild but for remove 
p.remove();// it is also similar to append but to remove

// practice qs
let redpara=document.createElement("p");
redpara.innerText="Hey, I'm red!";
redpara.style.color="red";
body.append(redpara);// body is declare in remove element section

let h3=document.createElement("h3");
h3.innerText="I'm a blue h3!"
h3.style.color="blue";
body.append(h3);
let div=document.createElement("div");
let h1=document.createElement("h1");
let inPara=document.createElement("p");

div.style.border="2px solid black";
div.style.backgroundColor="pink";
h1.innerText="I'm in a div";
inPara.innerText="ME TOO!"
body.append(div);
div.append(h1)
div.prepend(inPara);// prepend used to add first in element 
