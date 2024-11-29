/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Olawale Mustapha
      Date:   11/11/24

      Filename: project03-01.js
*/





 // Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
      return "$" + value.toFixed(2);
   }
   
   // Select all menu item checkboxes
   let menuItems = document.getElementsByClassName("menuItem");
   
   // Add an event listener to each menu item
   for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", calcTotal);
   }
   
   // Function to calculate the total order cost
   function calcTotal() {
      let orderTotal = 0; // Initialize total cost
   
      // Loop through menu items to calculate the total
      for (let i = 0; i < menuItems.length; i++) {
         if (menuItems[i].checked) {
            orderTotal += Number(menuItems[i].value); // Convert value to number and add to total
         }
      }
   
      // Update the total order cost in the UI
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
   }