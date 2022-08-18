const headerOne = document.createElement("h1");
headerOne.innerText = "hellow world";

const myApp = document.getElementById("app");
myApp.appendChild(headerOne);

const figure = document.createElement("figure")
figure.setAttribute("id","container")
document.getElementById("app").appendChild(figure)

const container = document.getElementById("container")
container.innerHTML = "<h2>En meget sød hund:)</h2>"
document.getElementById("app").appendChild(container)

const img = document.createElement("img");
img.src = "https://images.photowall.com/products/57211/dog-harmony.jpg?h=380&q=75";
document.getElementById("container").appendChild(img);

const para = document.createElement("p")
para.innerText = "En lille sød hund til salg for 100Kr fordi den er træls"
document.getElementById("container").appendChild(para)

console.log(myApp);