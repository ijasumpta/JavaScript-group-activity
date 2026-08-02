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