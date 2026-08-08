
 const itemName = prompt("Enter the item name: ");
 const itemPrice = Number(prompt("Enter item price: "));
 const quantity = Number( prompt("Enter quantity: "));
 const total =  Math.round (itemPrice * quantity);
 const discount = total * 0.03;

 console.log(`Order details:\n item: ${itemName},\n price per unit: ${itemPrice} NGN,\n item quantity: ${quantity}.\n Total Price = ${total} NGN \n total amount after discount = ${total - discount} NGN`);

 /*// Output
 
 Order details:
 item: orange,
 price per unit: 200 NGN,
 item quantity: 10.
 Total Price = 2000 NGN 
 total amount after discount = 1940 NGN
 */ 