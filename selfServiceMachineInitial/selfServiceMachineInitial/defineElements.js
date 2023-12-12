import "./scripts.js";
const section = document.querySelector('#items')
let divArray = [];

products.some(v => {
    let newDiv = document.createElement("div").setAttribute("class", "product");
    section.appendChild(newDiv)
});
console.log(products)