/*
=========================================================================================================================================================================
--------------------------------------------------------------------------- JavaScript ----------------------------------------------------------------------------------
=========================================================================================================================================================================


=========================================================================== activity 3 ==================================================================================


Part 1. Group Discussion
======

QUES-1. prompt() always returns text, even if the user types a number. Why might this cause problems, and how could you fix it?

ANS.
prompt() always returns a string (text) because its job is simply to collect what the user types into the input box. It does not try to determine whether the input is a number, a date, or any other data type.

Why this can cause a problems.
Many mathematical operations require numbers, not strings. If you use the value from prompt() directly, JavaScript will treat it as text instead of a number.

How to fix it.
Convert the string into a number before performing calculations.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
QUES-2. What's the difference between Number(), parseInt(), and parseFloat()?

ANS.
These functions all convert text into numbers, but they behave differently.

| Function       | Converts To               | Example              | Result |
| -------------- | ------------------------- | -------------------- | ------ |
| `Number()`     | Whole numbers or decimals | `Number("15.5")`     | `15.5` |
| `parseInt()`   | Whole numbers only        | `parseInt("15.9")`   | `15`   |
| `parseFloat()` | Decimal numbers           | `parseFloat("15.9")` | `15.9` |

When to use each.

Use Number() When the input should be a complete number, such as:
. Age
. Quantity
. Marks

Use parseInt() When you only want the whole number.

Use parseFloat() When decimal values are allowed.
Examples:
. Prices
. Weight
. Height
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
QUES-3. If you called .toUpperCase() on a variable, does it change the original variable, or does it just give you a new value? Discuss and test your prediction.

ANS.
Calling .toUpperCase() does not change the original variable. Instead, it returns a new string with all the letters converted to uppercase.

This happens because strings in JavaScript are immutable, meaning they cannot be changed after they are created. String methods such as .toUpperCase(), .toLowerCase(), .trim(), and .replace() return a new string rather than modifying the existing one.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
QUES-4. Why might a program need to check the length of a string a user typed in? 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
QUES-5. What real-world scenario can you think of where converting string to a number (or a number to string) would be essential? 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*
PART 4
========
Collaborative Technical Challenge

Step 1 — Understand the Problem

In MY own Understanding, we are to build a simple "Welcome Program"

The program should:

. Ask the user for their name.
. Ask the user for their age.
. Calculate their estimated birth year using the current year.
. Display a friendly welcome message that includes:
  . Their name
  . Their age
  . Their estimated birth year

The Goal is to Create a simple program that greets the user and estimates the year they were born.


Step 2 — Identify Inputs
The program needs the following information from the user:

| Input       | Why it is needed              |
| ----------- | ----------------------------- |
| User's Name | To greet the user personally. |
| User's Age  | To calculate the birth year.  |


Step 3 — Identify Processing
The program needs to:
. Get the current year.
. Convert the user's age into a number.
. Calculate the birth year.


Step 4 — Identify Outputs
The program should display:
. A welcome message
. The user's name
. Their age
. Their estimated birth year


Step 5 — Plan the Solution
Steps guides before writing code;
. Ask the user for their name.
. Store the name in a variable.
. Ask the user for their age.
. Convert the age into a number.
. Store the age in a variable.
. Get the current year.
. Calculate the birth year.
. Display a welcome message showing the user's name, age, and birth year.

It is best to thinking through the solution before coding.


Step 6 — Write the Code.*/
{
 let userName = prompt("What is your name?"); // Ask the user for their name
 let userAge = Number(prompt("How old are you?")); // Ask the user for their age
 const currentYear = new Date().getFullYear(); // Get the current year
 const birthYear = currentYear - userAge; // Calculate the birth year

 // Display the results in the console
 console.log(`Welcome, ${userName}!`);
 console.log(`You are ${userAge} years old.`);
 console.log(`You were born around ${birthYear}.`);

 // Display the results in an alert
 alert(`Welcome, ${userName}!
 You are ${userAge} years old.
 You were born around ${birthYear}.`);
};

/*
Step 7 — Test the Program
TEST 1

Input
Name: Ape!
Age: 20
Calculation 2026 - 20 = 2026

Output
Welcome, Ape!
You are 20 years old.
You were born around 2006.

TEST 2
Input
Name: Bola
Age: 45
Calculation 2026 - 45 = 1981

Output
Welcome, Bola!
You are 45 years old.
You were born around 1981.


Step 8 — Improve the Solution, Should you .trim() the name in case someone types extra spaces? Discuss why or why not.

Ans.
Yes, we should use .trim() when accepting a user's name. It is considered a good programming practice because it removes unwanted spaces at the beginning and end of the input.

Eg.
let name = "   Sam   ";
console.log(name); output "   Sam   "

if we use .trim()
let name = "   Sam   ".trim();
console.log(name); output "Sam"
*/

{
 let userName = prompt("Enter your name:").trim();
 let userAge = Number(prompt("Enter your age:"));

 const currentYear = new Date().getFullYear();
 const birthYear = currentYear - userAge;

 console.log(`Welcome, ${userName}!`);
 console.log(`You were born around ${birthYear}.`);
};

/*
Discussion Answer

Yes, we should use .trim() on the user's name. People often accidentally type extra spaces before or after their names. Using .trim() removes those unnecessary spaces, making the program's output cleaner and ensuring more accurate data. It also helps when validating input because a response containing only spaces becomes an empty string after trimming, allowing the program to detect that the user did not enter a valid name. Since .trim() only removes spaces at the beginning and end of the string, it does not affect spaces between words in names like "Mamah Chuka" or "Emeka Apeh". Therefore, using .trim() is a simple but effective improvement that makes the program more reliable and user-friendly.


Part 5: Extension Challenge, Add a check using .length — if the name is longer than 8 characters, only use the first 8 characters in the username.

Ans.
The .length property tells us how many characters are in a string.
Example; */
{
 let userName = "Apehmamah Chuka";

 console.log(userName.length); // Output: 15
 // We will use an if statement and .slice()
}
  // Solution
{
 let userName = prompt("Enter your name:").trim(); // Ask for the user's name
 // Check if the name is longer than 8 characters
 if (userName.length > 8) {
    userName = userName.slice(0, 8);
  }

 // Display the username
 console.log(`Welcome, ${userName}!`); // Output: Welcome, Apehmama!
}



// compelet code
{
 let userName = prompt("Enter your name:").trim();
 let userAge = Number(prompt("Enter your age:"));

 if (userName.length > 8) {
    userName = userName.slice(0, 8);
  }

 const currentYear = new Date().getFullYear();
 const birthYear = currentYear - userAge;

 console.log(`Welcome, ${userName}!`);
 console.log(`You are ${userAge} years old.`);
 console.log(`You were born around ${birthYear}.`);
}

/*
Summary.
1, .trim() removes extra spaces at the beginning and end of a string.
2, .length tells you how many characters are in a string.
3, if (userName.length > 8) checks whether the name has more than 8 characters.
4, .slice(0, 8) returns the first 8 characters of the name.
*/