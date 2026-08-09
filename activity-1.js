/*
=========================================================================================================================================================================
--------------------------------------------------------------------------- JavaScript ----------------------------------------------------------------------------------
=========================================================================================================================================================================


=========================================================================== activity 1 ==================================================================================

PART 1. Group Discussion 
======

QUES-1. Imagine you're building a program that needs to remember a user's name so it can greet them later. How would a variable help the program do this?

ANS. 
A variable is a named storage location in a program that holds data. When a user enters their name, the program stores it in a variable so it can be used later instead of asking for it repeatedly. */

// For example:

let userName = "Ape";
console.log("Welcome, " + userName + "!");// Output: Welcome, Ape!

/* In a real application, the name might come from user input:

Here, the variable userName temporarily remembers the user's input. Without variables, the program would have no convenient way to store and reuse the information.

Benefits of using variables include:
I.   Storing user information
II.  Reusing data multiple times
III. Making code easier to understand
IV.  Updating values when necessary
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*
QUES-2. What's the difference between console.log(), alert(), prompt(), and confirm()? When might a programmer choose one over another?

ANS
Although all four functions interact with information, they serve different purposes.

1. console.log() --> Displays information in the browser's developer console, Output appears only in the browser console.

it's Used for:
I.    Testing code
II.   Finding bugs
III.  Checking variable values

Example of console.log()
let age = 25;
console.log(age);

2. alert() --> Displays a message to the user, A pop-up appears with the message.

It's Used for:
I.   Showing important information
II.  Warning users
III. Simple notifications


Example of alert()
alert("Welcome to our website!");

3. prompt() --> Asks the user for text input

It's Used when the program needs information from the user.

Example of prompt()
let name = prompt("Enter your name:");

If the user types:
Ape

then:
name = "Ape"

4. confirm() --> Asks the user to confirm an action, Used before performing important actions like:
Deleting files
Submitting forms
Logging out

Example of confirm()
let result = confirm("Do you want to delete this file?");

If the user clicks OK:
result = true

If they click Cancel:
result = false

When should each be used?
console.log() --> During development and debugging.
alert() --> To notify users of important information.
prompt() --> To collect input from users.
confirm() --> To ask users to approve or cancel an action.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
QUES3. If you declared a variable with let instead of const, what would that let you do that you couldn't do otherwise? Why might a programmer choose const on purpose, even though let seems more flexible?

ANS.
The main difference is whether the variable's value can be reassigned.
let allows you to reassign value to the same variable while const doesn't because it is constant

When should you use let?
Use let when the value is expected to change.

Examples:
. Score in a game
. Shopping cart total
. Counter values

Why choose const?
Although let is more flexible, const makes programs safer.

Benefits include:
. Prevents accidental changes
. Makes code easier to understand
. Helps avoid bugs
. Shows other programmers the value should remain constant

QUES-4. JavaScript has several basic data types (numbers, strings, booleans, etc.). Why do you think a programming language needs different types instead of just one type for everything? 

ANS.
Different kinds of information require different ways of being stored and processed. Data types tell JavaScript how a value should be interpreted and what operations are appropriate for it.

Examples:

| Data Type | Example     | Purpose                   |
| --------- | ----------- | ------------------------- |
| Number    | `42`        | Calculations              |
| String    | `"Hello"`   | Text                      |
| Boolean   | `true`      | Decision making           |
| Undefined | `undefined` | Variable has no value yet |
| Null      | `null`      | Intentionally empty value |
 */

let age = 25;
let name = "David";
let isStudent = true;
// Each variable stores a different kind of information.

let loggedIn = true;

if (loggedIn) {
  console.log("Welcome!");
}; // Likewise, a boolean value is useful for conditions

/* Without different data types, JavaScript would not know whether values should be added, compared, displayed as text, or used to make decisions. Distinct data types improve accuracy, performance, and clarity.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

QUES-5. If two people on your team pick different variable names for the same piece of information (e.g., userName vs name1), what problems could that cause later?

ANS.
Consistent variable naming is important for teamwork and maintainability. Although both variables represent the same information, the inconsistent naming can create confusion.

A developer might accidentally update one variable but not the other, when a new team members come, they will spend more time trying yo understand the code instead of building new features.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

PART 2.
=======
 Predict the Output */

// Snippet A
let age = 25;
console.log("twenty-five"); // output -- twenty-five

age = "twenty-five";
console.log(age); // output -- twenty-five

// Snippet B
const isRaining = true;
console.log("is it raining? " + isRaining); // output -- is it raining? true

// Snippet C
let favoriteNumber;
console.log(favoriteNumber); // Output -- undefined
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


// PART 3. Debugging Challenge 
//======

let userName = "Amara" // semicolon needed
console.log(userName);

const favoriteColor = "blue";
console.log(favoriteColor);
// The code is actually correct JavaScript. It will run without errors and produce the expected output.
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

PART 4: Collaborative Technical Challenge 

Step 1 — Understand the Problem: In your own words, explain what this program needs to do.

ANS.
The program should:
. Ask the user for their name.
. Ask the user for their age.
. Calculate the user's birth year based on the current year.
. Display a friendly welcome message that includes:

Step 2 — Identify Inputs: What information does the program need from the user?

Ans.
The program needs two pieces of information from the user
. Name
. Age
These will be collected using prompt().

Step 3 — Identify Processing: What will the program need to calculate or figure out?

Ans.
After collecting the information, the program needs to:
. Convert the age into a number.
. Get the current year.
. Subtract the age from the current year.

Step 4 — Identify Outputs: What should the program display to the user?
Ans.
The program should display:
. A welcome message
. The user's name
. Their age
. Their estimated birth year

Step 5 — Plan the Solution: Before writing any code, write out the steps in plain English.

Ans.
Before writing any code, i need to think like programmers. 
I resovle that i need to
. Ask the user for their name.
. Store the name in a variable.
. Ask the user for their age.
. Store the age in a variable.
. Find the current year.
. Calculate the birth year.
. Display a welcome message.
. Display the birth year.

Step 6 — Write the Code: Use prompt() to collect the user's name and age, store them in variables, and use console.log() or alert() to greet them.

Ans.*/

let userName = prompt("What is your name?"); // Ask the user for their name
let userAge = Number(prompt("How old are you?")); // Ask the user for their age
const currentYear = new Date().getFullYear(); // Get the current year
let birthYear = currentYear - userAge; // Calculate the birth year

// Display the result
console.log("Welcome, " + userName + "!"); // Output -- Welcome, userName!
console.log("You are " + userAge + " years old."); // Output -- You are userAge years old.
console.log("You were born around " + birthYear + "."); // Output -- You were born around birthYear.

// Show the same message in a popup
alert(
  "Welcome, " + userName +
  "!\nYou are " + userAge +
  " years old.\nYou were born around " + birthYear + "."
);

/*
Step 7 — Test the Program: Try these test cases: ● Name: "Sam", Age: 20 ● Name: "Bola", Age: 45 

Ans.*/
console.log("Welcome, " + userName + "!");
console.log("You are " + userAge + " years old.");
console.log("You were born around " + birthYear + ".");
/* Output
Welcome, Sam!
You are 20 years old.
You were born around 2006.

Step 8 — Improve the Solution: As a group, discuss: is your variable naming clear? Could someone else read your code and immediately understand what it does? 

Ans.
The variable names are clear, they describe exactly what they store.
let userName;
let userAge;
const currentYear;
const birthYear;
Someone reading the code can immediately understand their purpose.
*/