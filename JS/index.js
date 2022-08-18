const headerOne = document.createElement("h1");
const myApp = document.getElementById("app");
const figure = document.createElement("figure")
const img = document.createElement("img");
const para = document.createElement("p")

headerOne.innerText = "hellow world";
myApp.appendChild(headerOne);

//Laver et figure tag og giver den et ID med setAttribute
figure.setAttribute("id","container")
myApp.appendChild(figure)

//Laver et h2 tag hvis at skriver innerHTML i vores container(figure)
const container = document.getElementById("container")
container.innerHTML = "<h2>En meget sød hund:)</h2>"
myApp.appendChild(container)

//Laver et img tag
img.src = "https://images.photowall.com/products/57211/dog-harmony.jpg?h=380&q=75";
container.appendChild(img);

//Laver et p tag
para.innerText = "En lille sød hund til salg for 100Kr fordi den er træls"
container.appendChild(para)

console.log(myApp);