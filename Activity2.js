// Activity 2

const itemName = prompt("Enter item:");
const itemPrice = Number(prompt("Enter price:"));
const quantity = Number(prompt("Enter quantity:"));
const total = itemPrice * quantity;
alert(`Item: ${itemName}
Price: ₦${itemPrice.toFixed(2)}
Quantity: ${quantity}
Total: ₦${total.toFixed(2)}`);



const receiptItemName = prompt("Enter the item name:");
const receiptItemPrice = Number(prompt("Enter the price:"));
const receiptQuantity = Number(prompt("Enter the quantity:"));
const discount = Number(prompt("Enter the discount amount:"));

const receiptTotal = (receiptItemPrice * receiptQuantity) - discount;

alert(`
========== RECEIPT ===========
Item: ${receiptItemName}
Price: ₦${receiptItemPrice.toFixed(2)}
Quantity: ${receiptQuantity}
Discount: ₦${discount.toFixed(2)}
-----------------------------
Final Total: ₦${receiptTotal.toFixed(2)}
=============================`);
