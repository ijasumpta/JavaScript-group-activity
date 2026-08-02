//    Activity 1: Part 1
 
/*
1. A variable can help the program do this  By creating a variable name and assigning a value to it 
So that whenever we need that value Later we use the variable name to access it

2.(i). A console.log() is use to test our code or debuge errors
A programmer chooses to use console.log when they want to test run there code or figure out an error from there code

(ii) alert() is a pop up box that  display  On the browser is use to send information or warn  the user
Programmers chooses alert when they want to send information to the user

(iii) prompt() is use to receive information from the users
Programmers uses prompt when they want to collect users information

(iv) Confirm() is a pop up box that  is Used when you want the user to confirm an action

3. Let can help us re-asign  a value to a variable but const does not accept reassignment

Programmers chooses const because  they want the value of a variable to remain the same throughout the program  to avoid errors and also makes the code easier to understand

4. Programming language need different data types because JavaScript understands each data in a different ways it helps them differentiate between a text (string), numbers and boolean values so it can process each of the data correctly

5. 

*/

// Part 2  Snippet A

let age = 25;
console.log(age);

 age = "Twenty-five"
console.log(age); // will output 25 and Twenty-five 


// B
const isRaining = true;
console.log("Is it raining? " + isRaining); //will output Is it raining? true

// C
let favoriteNumber;
console.log(favoriteNumber); // undefined

//******* Part 3 ********
let userName ="Amara"
//console.log(username);
// the code will not run because the variable name in the console is not declared
console.log(userName); // The corrected version will output Amara

const favoriteColor = "blue";
console.log(favoriteColor); // will output blue


// ******* Part 4 ********
// Step 1 - The program needs to ask the user for their name and age then greet the user by their name and also calculate their year of birth based on the current year
// Step 2 - Their Name and Age
// Step 3 - it needs to store the user's Name and Age then calculate their year of birth by substracting the current year from the Age
// Step 4 - it will display a welcome message with the users name and birth year
// Step 5 - 

//Step 6
    const yourName = prompt("What is your name?");
    const yourAge = Number( prompt("How old are you?"));
    const hobby = prompt("What is your favorite hobby");
    const currentYear = 2026;
    const birthYear =  currentYear -  yourAge 
    console.log(`Welcome! ${yourName}, You were born in the year ${birthYear}, Your favorite hobby is ${hobby} `);



//Step 7
   {
    const Name = "Bola"
    const Age = 45;
    const hobby = "Dancing";
    const currentYear = 2026;
    const birthYear = currentYear - Age;
    console.log(`Welcome! ${Name}, You were born in the year ${birthYear}, Your favorite hobby is ${hobby}`);

   }

   // Step 8 Yes the variable naming is clear and the code is easy to understand

   /*
     ****Part 5 **** Added user's favorite hobby
     The hubby will be stored as a string data type because the value hobby is a text not a number
   */

   



