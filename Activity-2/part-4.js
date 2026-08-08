//*********** Part 4 ***********************

/* Step 1 - we  are to building a quick shopping solution that helps our custumers to easily see the receipt of their orders
   Step 2 - item name, item price, quantity
   Step 3 - item price * quantity
   Step 4 -  A formated receipt of custumers order including item name, quantity and total amount

   Step 5 - i. Variable declaration 
            ii. prompt customer to enter the required data
            iii. choose operator to calculate product and quantity
            iv . display receipt
  
*///Step 6
//  const itemName = prompt("Enter the item name: ");
//  const itemPrice = prompt("Enter item price: ");
//  const quantity = prompt("Enter quantity: ");
//  const total = itemPrice * quantity;
//  console.log(`Order details:\n item: ${itemName},\n price per unit: ${itemPrice} NGN,\n item quantity: ${quantity}.\n Total Price = ${total} NGN`);

// Step 7 Result
/*
penOrder details:
 item: Notebook,
 price per unit: 2.50 NGN,
 item quantity: 4.
 Total Price = 10 NGN


 Order details:
 item: pen,
 price per unit: free NGN,
 item quantity: 1.
 Total Price = NaN NGN

 Order details:
 item: Book,
 price per unit: 0.75 NGN,
 item quantity: 3.
 Total Price = 2.25 NGN
*/
// Step 8

 const itemName = prompt("Enter the item name: ");
 const itemPrice = Number(prompt("Enter item price: "));
 const quantity = Number( prompt("Enter quantity: "));
 const total =  Math.round (itemPrice * quantity);
 console.log(`Order details:\n item: ${itemName},\n price per unit: ${itemPrice} NGN,\n item quantity: ${quantity}.\n Total Price = ${total} NGN`);

/*
Result

 Order details:
 item: pen,
 price per unit: 0.75 NGN,
 item quantity: 3.
 Total Price = 2 NGN


 To improve the code more we can use conditional statement with the do-while loop
  to instruct the program to proceed to the next instruction once the correct data type is entered.
*/
 


