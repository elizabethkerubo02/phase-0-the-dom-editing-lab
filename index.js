//creating an element in the dom usind createElement

const newElement = document.createElement("div");

//adding new elements to the DOM using append()

//append it to the body first 
document.body.append(newElement);



//create a new list
const ul = document.createElement("ul");

for(i = 0; i < 3; i++ ){
const li = document.createElement("li");
li.textContent = (i + 1).toString();
ul.append(li)
}
newElement.append(ul);

//adding elements to the DOM via innerHTML
const main = document.getElementById("main");
main.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";


//changing DOM elements

const main2 = document.getElementById("main2");
main2.style.height = "100px";
main2.style.backgroundColor= "red";
main2.textContent = "Changing DOM nodes properties";
main2.style.fontSize = "20px";
main2.style.color = "white";
main2.style.lineHeight = "2px"
main2.style.padding = "10px"
main2.className = "main-div diva";

//adding and removing class names using classList
main2.classList.add("second", "thirdClassName");
main2.classList.remove("diva");

//remove the elements from the DOM using removeChild() a certain child
const uli = document.getElementsByTagName("ul")[0];
const secondChild = uli.querySelector("li:nth-child(2)");
uli.removeChild(secondChild);

//and to remove whole element we use remove()  uli.remove()  
