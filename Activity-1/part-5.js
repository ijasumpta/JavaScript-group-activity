 

//****Part 5 **** Added user's favorite hobby
   
const yourName = prompt("What is your name?");
const yourAge = Number( prompt("How old are you?"));
const currentYear = 2026;
const birthYear =  currentYear -  yourAge 
const hobby = prompt("What is your favorite hobby");
console.log(`Welcome! ${yourName}, You were born in the year ${birthYear}, Your favorite hobby is ${hobby}. `);

//  The hubby will be stored as a string data type because the value hobby is a text not a number
