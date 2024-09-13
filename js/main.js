// Variables to store cart items and total price
let cartCount = 0;
let totalPrice = 0;

// Get elements from the DOM
const cartCountElement = document.getElementById("cart-count");
const totalPriceElement = document.getElementById("total-price");
const cartItemsElement = document.getElementById("cart-items");

// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const price = parseFloat(event.target.getAttribute("data-price"));
        const bookTitle = event.target.parentElement.querySelector("h3").innerText;
        
        // Update cart count and total price
        cartCount++;
        totalPrice += price;

        // Update the DOM elements
        cartCountElement.innerText = cartCount;
        totalPriceElement.innerText = totalPrice.toFixed(2);

        // Add the book to the cart items list
        const listItem = document.createElement("li");
        listItem.innerText = `${bookTitle} - $${price}`;
        cartItemsElement.appendChild(listItem);
    });
});
