/*
=========================================================================================================================================================================
--------------------------------------------------------------------------- JavaScript ----------------------------------------------------------------------------------
=========================================================================================================================================================================


=========================================================================== activity 2 ==================================================================================

//PART 1
//=======

QUES-1. What's the difference between the + operator used for math and the + operator used for joining strings? How does JavaScript decide which one to do?

ANS
The + operator has two jobs in JavaScript.
. Addition (for numbers)
. Concatenation (joining strings)

JavaScript decides what to do based on the data types of the values.

In Addition, If both values are numbers, JavaScript will perform arithmetic.
Eg. 2 + 2 will print 4

In Concatenation, which is joining strings and also joining numbers and strings.
Eg. 
"2" + "2" will print 22 // both are strings
"2" + 2 will print 22 // one value is a string, so JavaScript joins them.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


QUES-2. Now Comparing these two lines Using + and Using Template Literals, Which is easier to read?

Most developers prefer template literals because they look more like normal English. */

// Eg. using +
console.log("Welcome, " + name + "! " + "You are " + age + " years old."); // it has lots of quotation marks, plus signs and spaces.

// using template literals(it makes use of backtick)
console.log(`Welcome, ${name}! You are ${age} years old.`); // This is much cleaner, You simply write the sentence naturally and place variables inside ${}.

/*
in conclusion
with + the code is long
with template literals it is shorter and much easier to read and maintain.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


QUES-3.  What would happen if you tried to add a number and a string together, like 5 + "5"?

ANS
Because "5" is a string, not a number.

JavaScript behaves differently, it will convert the number 5 into the string "5".

It becomes: "55"
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

QUES-4. Why do you think template literals use backticks ( `` ) instead of regular quotes?

ANS
Template literals use backticks because they provide features that ordinary quotes do not.

Summary
Question & Answer

Q. What does + do?	Ans. It adds numbers or joins strings, depending on the data types.
Q. How does JavaScript decide?	Ans. It checks the data types, If either value is a string, it performs string concatenation.
Q. Which is easier: + or template literals?	Ans. Template literals are generally easier to read because they reduce clutter and let you embed variables directly.
Q. What does 5 + "5" produce?	Ans. "55" because JavaScript converts the number to a string and joins them.
Q. Why use backticks?	Ans. Backticks enable variable interpolation (${}) and multi-line strings, making code cleaner and more readable.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

PART 2. Predict the Output
=======

QUES-1 */

// Snippet A 
let a = 10;
let b = "5";

console.log(a + b);
console.log(a - b);

// What will this code output? 

// ANS.
console.log(a + b); // it Will output 105
console.log(a - b); // it will output 5

// Snippet B.
let price = 20;
let quantity = 3;

console.log(`Total: $${price * quantity}`); // it Will output $60

// Snippet c.
let x = 4;
let y = 2;

console.log("result: " + x + y); // it Will output result: 42
console.log("result: " + (x - y)); // it Will output result: 2, due to parentheses, it tells JavaScript "Do this calculation first before doing anything else.  Meaning (x - y) should be calculated first before "result: " + 
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

PART 3
=======
Debugging Challenge 

// Q.1
let firstName = "Tunde";
let lastName = "Okafor";
let fullName = firstName + " " lastName;

console.log("Welcom, " + fullName + "!");

Ans.
When you run it, it will give an error code, which says SyntaxError: Unexpected identifier 'lastName'. 
the error is coming from lastName, it wasn't properly imputed.

The correct impute is let fullName = firstName + " " + lastName;*/

let firstName = "Tunde";
let lastName = "Okafor";
let fullName = firstName + " " + lastName;

console.log("Welcome, " + fullName + "!"); // Output Welcome, Tunde Okafor
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Q.2
let itemPrice = "15";
let total = itemPrice + 5;

console.log(`Your total is $${total}`);

/*
ANS.
The problem here is the itemPrice, the value assigned to it is string "15". The rule is, If one value is a string, the + operator joins them as text instead of adding them.
So JavaScript will convert the number 5 into a string "5", It becomes: Your total is $155 But that's wrong because we wanted to add 15 + 5 to output Your total is $20

To Fix It
We need to convert "15" from a string into a number before adding.

let itemPrice = Number("15"); // number converts the string to number
let total = itemPrice + 5;

console.log(`Your total is $${total}`); // Output Your total is $20
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


PART 4
========
Collaborative Technical Challenge

Step 1 — Understand the Problem

In MY own Understanding, The goal is to build a simple receipt generator that The program should:
. Asks the user for the item they are buying.
. Asks for the price of one item.
. Asks how many items they want to buy.
. Calculates the total cost.
. Displays a neatly formatted receipt showing all the details.


Step 2 — Identify Inputs
The program needs three pieces of information from the user.

| Input      | Example  | Data Type |
| ---------- | -------- | --------- |
| Item Name  | Notebook | String    |
| Item Price | 2.50     | Number    |
| Quantity   | 4        | Number    |

Since prompt() always returns text, the price and quantity should be converted to numbers using Number().


Step 3 — Identify Processing
The program needs to calculate the total cost.
Eg.
Price = 2.50
Quantity = 4

Total = 2.50 × 4
Total = 10.00


Step 4 — Identify Outputs
The receipt should display:
Item name
Price per item
Quantity purchased
Total amount

Output.
========= RECEIPT ==========
Item: Notebook
Price: $2.50
Quantity: 4
Total: $10.00


Step 5 — Plan the Solution
Before writing code:
. Ask the user for the item name.
. Store it in a variable.
. Ask for the item price.
. Convert the price to a number.
. Ask for the quantity.
. Convert the quantity to a number.
. Calculate the total price.
. Display a formatted receipt.


Step 6 — Write the Code
ANS. */
{
 let itemName = prompt("Enter the item name:");  // Ask the user for the item name
 let itemPrice = Number(prompt("Enter the item price:"));  // Ask for the price
 let quantity = Number(prompt("Enter the quantity:")); // Ask for the quantity
 let total = itemPrice * quantity;  // Calculate the total

 // Display the receipt
 console.log(`
 ========== RECEIPT ==========
 Item: ${itemName}
 Price: $${itemPrice}
 Quantity: ${quantity} 
 -----------------------------
 Total: $${total}
 =============================
 `);
};

/*
Step 7 — Test the Program

Test Case 1
Input
  Item: Notebook
  Price: 2.50
  Quantity: 4
  Calculation: 2.50 × 4 = 10.00
Output
  ========== RECEIPT ==========
  Item: Notebook
  Price: $2.50
  Quantity: 4
  -----------------------------
  Total: $10.00
  =============================

Test Case 2
Input
  Item: Pen
  Price: 0.75
  Quantity: 10
  Calculation: 0.75 × 10 = 7.50
Output
  ========== RECEIPT ==========
  Item: Pen
  Price: $0.75
  Quantity: 10
  -----------------------------
  Total: $7.50
  =============================

Test Case 3
Input
 tem: Notebook
 Price: 2.50
 Quantity: 0
Calculation: 2.50 × 0 = 0.00
Output:
 Total: $0.00

Although the calculation is mathematically correct, a quantity of 0 probably doesn't make sense for a purchase. The program could warn the user.

Test Case 4
Input
 Item: Notebook
 Price: free
 uantity: 2

Since: Number("free") it becomes: NaN
calculation becomes: NaN × 2 = NaN
Output:
 Total: $NaN

The program should validate the input and tell the user the price must be a valid number.

Step 8 — Improve the Solution

1. Round the Total
Prices usually displays two decimal places. // using .toFixed(2)

2. Add a Currency Symbol
it can be achived by adding $ or ₦ before ${}
*/

{
 let itemName = prompt("Enter the item name:");  // Ask the user for the item name
 let itemPrice = Number(prompt("Enter the item price:"));  // Ask for the price
 let quantity = Number(prompt("Enter the quantity:")); // Ask for the quantity
 let total = itemPrice * quantity;  // Calculate the total

 // Display the receipt
 console.log(`
 ========== RECEIPT ==========
 Item: ${itemName}
 Price: ₦${itemPrice.toFixed(2)}
 Quantity: ${quantity} 
 -----------------------------
 Total: ₦${total.toFixed(2)}
 =============================
 `);

 alert(`Receipt

 Item: ${itemName}
 Price: ₦${itemPrice.toFixed(2)}
 Quantity: ${quantity}

 Total: ₦${total.toFixed(2)}`);
};

/*
Part 5: Extension Challenge Add a "discount code" variable to your program. If a discount amount (as a number) is applied, subtract it from the total before displaying the final receipt line. 
Ans.

*/