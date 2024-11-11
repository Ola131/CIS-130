/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: 
      Date:   

      Filename: project02-04.js
 */
 // Constants for item prices and sales tax
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// Function to format a value as currency
function formatCurrency(value) {
   return "$" + value.toFixed(2);
}

// Function to calculate the total cost
function calcTotal() {
   let cost = 0;

   // Check if each item is selected and update the cost accordingly
   const buyChicken = document.getElementById("chicken").checked;
   const buyHalibut = document.getElementById("halibut").checked;
   const buyBurger = document.getElementById("burger").checked;
   const buySalmon = document.getElementById("salmon").checked;
   const buySalad = document.getElementById("salad").checked;

   // Calculate the total cost based on selected items
   cost += buyChicken ? CHICKEN_PRICE : 0;
   cost += buyHalibut ? HALIBUT_PRICE : 0;
   cost += buyBurger ? BURGER_PRICE : 0;
   cost += buySalmon ? SALMON_PRICE : 0;
   cost += buySalad ? SALAD_PRICE : 0;

   // Display the total item cost
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

   // Calculate and display the tax
   const tax = cost * SALES_TAX;
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);

   // Calculate and display the total bill including tax
   const totalCost = cost + tax;
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Wait until DOM content is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
   // Event handlers for checkboxes to call calcTotal() when clicked
   document.getElementById("chicken").addEventListener("click", calcTotal);
   document.getElementById("halibut").addEventListener("click", calcTotal);
   document.getElementById("burger").addEventListener("click", calcTotal);
   document.getElementById("salmon").addEventListener("click", calcTotal);
   document.getElementById("salad").addEventListener("click", calcTotal);
});