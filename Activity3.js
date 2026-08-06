// Activity 3

//1. prompt() always returns text. Convert with Number() before calculations.
//2. Number() converts whole and decimal numbers. 
//3. toUpperCase() returns a new value; it does not change the original string.
//4. length checks how many characters are in a string.
//5. Real-life examples include shopping, banking and payroll.

//Challenge


const firstName = prompt("Enter your first name:").trim().toLowerCase();
const favouriteNumber = Number(prompt("Enter your favourite number:"));
const userName = `${firstName}${favouriteNumber}`;
alert(userName);