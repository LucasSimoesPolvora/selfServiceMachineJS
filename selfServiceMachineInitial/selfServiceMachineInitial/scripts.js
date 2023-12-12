let nameSpan;
let priceSpan;
let quantitySpan;

let products = [
  {
    photo: "img/big-mac.png",
    name: "Big Mac",
    price: 5.99,
    active: false,
    quantity: 0,
  },
  
  {
    photo: "img/mc-chicken.png",
    name: "Mc Chicken",
    price: 4.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/double-cb.png",
    name: "Double Cheese Burger",
    price: 2.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/fries.png",
    name: "Fries",
    price: 2.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/nuggets.png",
    name: "Mc Nuggets",
    price: 3.49,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/salad.png",
    name: "Salad",
    price: 2.79,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/cola.png",
    name: "Coke",
    price: 1.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/lipton.png",
    name: "Ice Tea",
    price: 1.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/water.png",
    name: "Water",
    price: 1.49,
    active: false,
    quantity: 0,
  },
];
const move = () => {
  updateElements();
};
setInterval(move, 200);
function substractProduct(){
  products[0].quantity++;
  // var productElement = button.closest('.product')
}

function addProduct(){

}

function defineElements(){
  let section = document.getElementsByClassName('items')
  let item = section[0];

  products.forEach(v => {
    let productItem = document.createElement("div");
    productItem.className = "product";
    item.appendChild(productItem);

    let photoDiv = document.createElement("div");
    photoDiv.className = "photo";
    productItem.appendChild(photoDiv);

    let photoImg = document.createElement("img");
    photoImg.src = v.photo;
    photoDiv.appendChild(photoImg);

    let descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description";
    productItem.appendChild(descriptionDiv);

    nameSpan = document.createElement("span");
    nameSpan.className = "name";
    nameSpan.textContent = v.name
    descriptionDiv.appendChild(nameSpan);

    let priceSpan = document.createElement("span");
    priceSpan.className = "price";
    priceSpan.textContent = v.price
    descriptionDiv.appendChild(priceSpan);

    let quantityareaDiv = document.createElement("div");
    quantityareaDiv.className = "quantity-area";
    descriptionDiv.appendChild(quantityareaDiv);

    let minusButton = document.createElement("button");
    minusButton.onclick = "substractProduct()";
    minusButton.textContent = "-"
    quantityareaDiv.appendChild(minusButton);

    let quantitySpan = document.createElement("span");
    quantitySpan.className = "quantity";
    quantitySpan.textContent = v.quantity;
    quantityareaDiv.appendChild(quantitySpan);

    let plusButton = document.createElement("button");
    plusButton.onclick = "addProduct()";
    plusButton.textContent = "+"
    quantityareaDiv.appendChild(plusButton);
});
}

function updateElements(){
  nameSpan = document.getElementsByClassName("name");
  priceSpan = document.getElementsByClassName("price");
  quantitySpan = document.getElementsByClassName("quantity")
  products.forEach(v => {
    
  })

}