//  From Mamah
//Ask the user for their name
let userName = prompt("What is your name?");

// Ask the user for their age
let userAge = Number(prompt("How old are you?"));

// Get the current year
const currentYear = new Date().getFullYear();

// Calculate the birth year
let birthYear = currentYear - userAge;

// Display the result
console.log("Welcome, " + userName + "!");
console.log("You are " + userAge + " years old.");
console.log("You were born around " + birthYear + ".");

// Show the same message in a popup
alert(
  "Welcome, " + userName +
  "!\nYou are " + userAge +
  " years old.\nYou were born around " + birthYear + "."
)



   {
    const userName = prompt("What is your name: ");
const age = prompt("What is your age: ");

function birthYear(age){
    const currentYear = new Date().getFullYear();
    return currentYear - age;
}
const yearOfBirth = birthYear(age);
console.log(`Welcome ${userName}, your birth year is ${yearOfBirth}`)

   }



   /*
   
   const prompt = require("prompt-sync")();

let firstName = prompt("What is your First Name? ");
let lastName = prompt("What is your Last Name? ");
let course = prompt("What Course are you studying? ");
let school = prompt("Which School are you in? ");

console.log(`Student Information

Full Name: ${firstName} ${lastName}
Course: ${course}
School: ${school}`);

Chukwuka Mamah
7:34 PM
What is require()?
require() is a built-in Node.js function that loads a module or package into your program.

What is "prompt-sync"?
prompt-sync is an external package that allows Node.js programs to ask the user questions.

Without it, you will get error on in the output terminal because Node.js does not include a prompt() function.
There are two sets of parentheses (). The first one loads the package and second one runs the function returned by the package.

const prompt = require("prompt-sync")();
So prompt as a variable name has ben assigned a value, now the program knows what prompt() means

when you type node index.js(or the file you are using) in the bash terminal
   */


