import "./scripts.js";
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

    let nameSpan = document.createElement("span");
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