/* global Product, Cart */

"use strict";

// Set up an empty cart for use on this page.
state.cart = new Cart([]);
let cartContents = document.getElementById("cartContents");
let cartUl = document.createElement("ul");
cartContents.appendChild(cartUl);

// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {
  //DONE: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById("items");
  for (let i in state.allProducts) {
    let option = document.createElement("option");
    option.textContent = state.allProducts[i].name;
    option.setAttribute("value", state.allProducts[i].name);
    items.appendChild(option);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // DONE: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  state.cart.saveToLocalStorage();
  state.cart.updateCounter();
  updateCartPreview();
}

// DONE: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  const itemSelected = document.getElementById("items").value;
  const quantitySelected = document.getElementById("quantity").value;
  state.cart.addItem(itemSelected, quantitySelected);
}

// DONE: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // DONE: Get the item and quantity from the form
  const itemSelected = document.getElementById("items").value;
  const quantitySelected = document.getElementById("quantity").value;
  let li = document.createElement("li");
  li.textContent = `Item:${itemSelected}; Quantity ${quantitySelected}`;
  cartUl.appendChild(li);
  // DONE: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById("catalog");
catalogForm.addEventListener("submit", handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
