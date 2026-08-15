
// Part 4: Collaborative Technical Challenge
/* Step 1 —
1. The program will ask for the shopping detailes (name, price , quantity) and make sure that the correct data is entered
2. The program is also meant to calculate the total of customers shopping and apply free shipping if the total is above a specific amount that will be disclosed to the program,
then the program at the end will also display a formatted receipt for customers refrence.

Step 2 — item name , price and quantity

Step 3 — It will Calculate the total cost of the item (price * quantity) 
For conversion, Data from price and quantity will be converted to numbers while the data from name will be trimed and converted to upperCase
Then for decision we will set a limit for free shipping discount, a customer qualifies for free shipping if the total cost of items bought exceeds the set limit. 

Step 4 —  It should mention name of the customer and order detailes additionally it should tell the user if they are qualifield for free delivery or not.

Step 5 — 
i. variable declaration and assignment(via prompting)
ii. Conversion of data to their appropriate data types 
iii. Creating a function to calculate the cost of items purchased (price * quantity)
iv. Using if statement to decide which user get a free shipping discount
v. Printing to console the receipt of the purchase
*/ 
// Step 6 —

const itemName = (prompt("Enter item name:").toUpperCase().trim());
const price = Number(prompt("Enter price:"));
const quantity = Number(prompt("Enter quantity:"));

function totalCost() {
    let total = price * quantity;
    let limit = 1000;  
    let merit;
  
    if (total < limit) {
        merit = false;
        console.log(`
            ======Customers Receipt======
            Item purchased: ${itemName}
            Quantity purchased: ${quantity}
            Price per unit: $${price}
            Free shipping merit: ${merit}
            Total amount paid: $${total}
            =========Thank You.==========
            `)
    } 
    else {
        merit = true;
        console.log(`
            ======Customers Receipt======
            Item purchased: ${itemName}
            Quantity purchased: ${quantity}
            Price per unit: $${price}
            Free shipping merit: ${merit}
            Total amount paid: $${total}
            =========Thank You.==========
            `)
    }
} 

totalCost();

/* Step 7 Output
======Customers Receipt======
Item purchased: BACKPACK
Quantity purchased: 2
Price per unit: $30
Free shipping merit: false
Total amount paid: $60
=========Thank You.==========


======Customers Receipt======
Item purchased: PEN
Quantity purchased: 20
Price per unit: $1.5
Free shipping merit: false
Total amount paid: $30
=========Thank You.==========



======Customers Receipt======
Item purchased: HANDFAN
Quantity purchased: 1
Price per unit: $2000
Free shipping merit: true
Total amount paid: $2000
=========Thank You.==========

*/
