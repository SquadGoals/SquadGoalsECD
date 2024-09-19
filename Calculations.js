
let cost = {
    sixmonths: 5000,
    elevenmonths: 4500,
    threeyears: 3500,
    fiveyears: 3000,
    weekend1: 350,
    weekend2: 250,
    weekend3: 250
 };
 




 // Item string
 var itemString = "sixmonths, elevenmonths, threeyears, fiveyears, weekend1, weekend2, weekend3";
 


 // Group items
 var sixmonths = ["sixmonths"];
var elevenmonths = ["elevenmonths"];
var threeyears=["threeyears"];
var fiveyears =["fiveyears"];
var weekend1 =["weekend1"];
var weekend2 =["weekend2"];
var weekend3 = ["weekend3"];

 
 // Calculate the total price
 function total() {
     // Initialize total price
     let totalPrice = 0;
 
 
   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
 
     checkboxes.forEach(checkbox => {
         if (checkbox.checked) {
             if (checkbox.id.includes('sixmonths')) {
                 totalPrice += cost.sixmonths;
             } else if (checkbox.id.includes('elevenmonths')) {
                 totalPrice += cost.elevenmonths;
             } else if (checkbox.id.includes('threeyears')) {
                 totalPrice += cost.threeyears;
             }
            else if (checkbox.id.includes('fiveyears')) {
                totalPrice += cost.fiveyears;
            }
            else if (checkbox.id.includes('weekend1')) {
                totalPrice += cost.weekend1;
            }
            else if (checkbox.id.includes('weekend2')) {
                totalPrice += cost.weekend2;
            }
            else if (checkbox.id.includes('weekend3')) {
                totalPrice += cost.weekend3;
            }
         }

     });
     let yearTotal = totalPrice * 12;
     // Display the total price
     document.getElementById('result').textContent = `Total Price: R${totalPrice.toFixed(2)}`;
     document.getElementById('result2').textContent = `Total Year: R${yearTotal.toFixed(2)}`;
 }
 
 // Add event listener to the button
 document.getElementById('calculateBtn').addEventListener('click', total);
 

