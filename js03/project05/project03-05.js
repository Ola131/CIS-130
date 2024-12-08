/*    JavaScript 7th Edition
      Chapter 3
      Project 03-05

      Application to generate a horizontal bar chart
      Author: Olawale Mustapha
      Date:   11\11\2024

      Filename: project03-05.js
*/

// Array of phone models sold by the company
let phones = ["Photon 6E", "Photon 6X", "Photon 7E", "Photon 7X", "Photon 8P"]; // Corrected parentheses to brackets

// Units sold in the previous quarter
let sales = [10281, 12255, 25718, 21403, 16142]; // Corrected parentheses to brackets

// Variable to calculate total sales
let totalSales = 0;

// Use the forEach() method to sum the sales for each phone model and add it to the totalSales variable
sales.forEach(addToTotal); // Corrected function name capitalization

// For loop to generate bar chart of phone sales
for (let i = 0; i < phones.length; i++) { // Corrected loop counter to start at 0 and use < instead of <=
   let barChart = ""; // Variable to store HTML code for table cells used to create bar chart

   // Calculate the percent of total sales for a particular phone model
   let barPercent = Math.round((100 * sales[i]) / totalSales); // Fixed calculation and referenced `sales[i]`

   let cellTag; // Variable that will define the class of td elements used in creating the bar chart cells.

   // Determine the table cell based on the value of the phone model
   switch (phones[i]) {
      case "Photon 6E":
         cellTag = "<td class='group1'>";
         break;
      case "Photon 6X":
         cellTag = "<td class='group2'>";
         break;
      case "Photon 7E":
         cellTag = "<td class='group3'>";
         break;
      case "Photon 7X":
         cellTag = "<td class='group4'>";
         break;
      case "Photon 8P":
         cellTag = "<td class='group5'>";
         break;
      default:
         cellTag = "<td>";
   }

   // Table row containing information on phone and total sales (formatted with thousands separator)
   barChart += "<tr><th>" + phones[i] + " (" + formatNumber(sales[i]) + ")</th>";

   // For loop to create a table cell, 1 for each percentage value in the barPercent variable
   for (let j = 0; j < barPercent; j++) { // Changed loop condition to < instead of <=
      barChart += cellTag + "</td>";
   }
   barChart += "</tr>";

   // Insert the barChart HTML code into first tbody element in the web document
   document.getElementsByTagName("tbody")[0].insertAdjacentHTML("beforeend", barChart); // Fixed tbody reference and method
}

// Callback function that adds the value of each array element to the totalSales variable
function addToTotal(arrValue) {
   totalSales += arrValue;
}

// Function that takes a number value and returns it as a text string with a thousands separator
function formatNumber(value) {
   return value.toLocaleString();
}