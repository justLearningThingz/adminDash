const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text content";

container.appendChild(content);


const paragraph = document.createElement("p");
// paragraph.classList.add("paragraph");
paragraph.textContent = "Hey, I'm red";

paragraph.style.color = "red";
container.appendChild(paragraph);

const h3 = document.createElement("h3");
h3.textContent="I'm a blue h3";
h3.style.color = "blue";
container.appendChild(h3);

const pinkDiv = document.createElement("div");
pinkDiv.style.cssText = "border: 3px solid black; background-color:pink;";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
pinkDiv.appendChild(h1);

const p = document.createElement("p");
p.textContent = "ME TOO!";
pinkDiv.appendChild(p);

container.appendChild(pinkDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("hello der");

// const btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click", ()=>{
//     alert("hello third")
// });

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (e){
    e.target.style.background = "blue";
});
