/* 
Create a JavaScript object called shoppingCart that represents a customer's shopping cart.

The object should have a cartItems property, which is an array containing the items in the cart. Each item should be represented as an object with a name, price, and quantity.

Your shoppingCart object should have the following methods:

1. addItem(name, price, quantity)
Adds a new item to the cart.
Example: shoppingCart.addItem("Keyboard", 25000, 2);

2. calculateTotal()
Calculates and returns the total cost of all items in the cart.

3. displayCart()
Displays each item in the cart along with its name, price, and quantity.

4. checkout()
Checks if the cart is empty.
If the cart is empty, display "Your cart is empty".
Otherwise, display the total amount to be paid and clear the cart.

5. getCartItems()
Returns the current items in the cart.

6. clearCart()
Removes all items from the cart.
It sets cartItems back to an empty array.

*/




/* 
==================== Task =====================

You are given user data from a backend:

const users = [
  { id: 1, firstName: "Jane", lastName: "Doe", isActive: true },
  { id: 2, firstName: "Mark", lastName: "Smith", isActive: false },
  { id: 3, firstName: "Sarah", lastName: "Johnson", isActive: true }
];
Task:

Using map():

Return a new array

Combine firstName and lastName into fullName

Replace isActive with:

"Active User" if true

"Inactive User" if false

Remove the original firstName and lastName properties

Expected structure:

[
  { id: 1, fullName: "Jane Doe", status: "Active User" },
]

*/