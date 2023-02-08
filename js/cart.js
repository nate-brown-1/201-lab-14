/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() { }


function showCart() {
  // DONE: Find the table body
  let tableBody = document.querySelector('tbody');
  // DONE: Iterate over the items in the cart
  for (let i in state.allProducts) {
    // DONE: Create a TR
    let tr = document.createElement('tr');
    // NOT DONE: Create a TD for the delete link, quantity,  and the item
    let tdProduct = document.createElement('td');
    let tdQuantity = document.createElement('td');
    // DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
    tdProduct.textContent = state.cart.items[i].product;
    tdQuantity.textContent = state.cart.items[i].quantity};
    // DONE: Add the TR to the TBODY and each of the TD's to the TR
    tableBody.appendChild(tr);
    tr.appendChild(tdProduct);
    tr.appendChild(tdQuantity);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
