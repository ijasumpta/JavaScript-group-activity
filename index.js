// Part 1: Group Discussion
//1. You can use a variable to store the name because variable allows you store an data with a name and use the data later
//2. console.log() is used to display something to the screen and especially useful when debugging. alert() is used to display a  message to the user to acknowledge. prompt() is used to recieve input from the user while corfim() is used to ask the user for binary decision
//3. let allow you to declare a variable and reassign it to a different value later while const does not. A programmer may choose const because he doesn't want to accidentally reassign a variable whose value should not change
//4. Different datatypes help JS to perform different oprations correctly. It is like having different tools for different job. trying to use screw driver to drive down a nail will not work well
//5. It may cause consistency problem

//PART B: PREDICT THE OUTPUT
//Snippet A: 25 & twenty-five
//Snippet B: Is it raining? true
//Snippet C: Undefined

//PART 3: DEBUGGING CHALLENGE
//userName didn't end with a semicolon and favoriteColor started with a capital C

//PART 4: The program first need to receive as input the name and age and store it in a variable. The the program will need to subtract the age from the current year to get the year the user is born. The program will need to return the year which then will be assigned to a variable which then will be concatenated (or use template literal) to add display the age and the birth year.
const userName = prompt("What is your name: ");
const age = Number(prompt("What is your age: "));

function birthYear(age){
    const currentYear = new Date().getFullYear();
    return currentYear - age;
}
const yearOfBirth = birthYear(age);
console.log(`Welcome ${userName}, your birth year is ${yearOfBirth}`)


//PART 5: EXTENSION CHALLENGE
//We use prompt() to receive one more string input and store with a variable. Then concatenate it with the other information




//Activity 2: Building Sentences with Code
//Part 1: Group Discussion
//1. There is no difference between the two. JS use s the + symbol to join strings together as well as add numbers together
//2. I find the one with template literal easier to read because it is cleaner
//3. JS will the two together which will result to 55
//4. Regular quote is already used for string

//PART B: PREDICT THE OUTPUT
//Snippet A: console.log(a + b); //105         console.log(a - b); //5
//Snippet B: Total cost: $60
//Snippet C: console.log("Result: " + x + y); //Result: 6          console.log("Result: " + (x + y)); //Result: 6

//PART 3: DEBUGGING CHALLENGE
//1. You cannot do variable concatenation 
//2. The itemPrice is supposed to be a number but its a string

//PART 4: COLLABORATIVE TECHNICAL CHALLENGE
const itemName = prompt("What item did you purchase? ");
const itemPrice = Number(prompt("What is the price? "));
const itemQty = Number(prompt("What is the quantity? "));

const receiptQenerator = ( item, Qty) => {
    return itemPrice * itemQty;
};

const result = receiptQenerator(itemPrice, itemQty);
const roundedResult = Math.round(result);

console.log("============= Receipt ===========");
console.log(`Item name: ${itemName} \nItem price: ${itemPrice} \nItem Quantity: ${itemQty}`);
console.log(`Total: #${roundedResult}`)


//PART 5: EXTENSION CHALLENGE
const itemName = prompt("What item did you purchase? ");
const itemPrice = Number(prompt("What is the price? "));
const itemQty = Number(prompt("What is the quantity ? "));
const discount = prompt("Do you have a discount code? ");
const discountAmount = 10000;

const receiptQenerator = ( item, Qty) => {
    if(discount === 'yes'){
        return (itemPrice * itemQty) - discountAmount;
    }
    return itemPrice * itemQty;
};  

const result = receiptQenerator(itemPrice, itemQty);
const roundedResult = Math.round(result);


console.log("============= Receipt ===========");
console.log(`Item name: ${itemName} \nItem price: ${itemPrice} \nItem Quantity: ${itemQty}`);
console.log(`Total: #${roundedResult}`)





//ACTIVITY 3: THE TYPE DETECTIVE AGENCY
//PART 1: GROUP DISCUSSION
//1. Prompt returning a string could cause a bug because if a program expect a number bug got a string, it may not be able to properly perfom mathematical operation on it accurately. This can be fixed by converting the string data type to number using Number() method

//2. Number() returns a floating point or an integer by trying to convert the entire value of input. parseInt() convert to integer without the number(s) after demical point if the number is a decimal number. parseFloat() convert to integer while preserving the demical point. parseInt() would be useful where a programmer wants the program to calculate an average and return only the number before the decimal point

//3. .toUppercase() does not change the original string because strings are immutable. Rather it returns a new string
let userName = "peter"; // let was used here because const will return a referrence error
const capitalName = userName.toUpperCase();

console.log(userName); //peter
console.log(capitalName); //PETER

//4. If the user is required to type a particular number of string as in the case of password to ensure it meets the minimum or essay response to ensure it doesn't exceed the maximum number of text

//5. A real world scenario would be when asking users for price of an item using prompt

//PART B: PREDICT THE OUTPUT
//Snippet A: console.log(input + 8) //428                   console.log(converted + 8) //50
//Snippet B: console.log(name.trim()) //chidinma            console.log(name.length) //8
//Snippet C: console.log(word.toUpperCase()) //JAVASCRIPT   console.log(word) //javascript

//PART C: DEBUGGING CHALLENGE
//1. userAge variable needs to be converted into number first before using it
let userAge = Number(prompt("Enter your age:"));
let nextYearAge = userAge + 1;
console.log("Next year, you will be " + nextYearAge);

//2. The .toUpperCase string method uses a capital letter T instead of small letter t. The variable also didn't end with a semicolon.
let city = "Lagos";
console.log(city.toUpperCase());


//PART 4: COLLABORATIVE TECHNICAL CHALLENGE
let firstName = prompt("Enter your first name: ")
let favoriteNumber = Number(prompt("Enter your favorite number: "));

let lowerCaseName = firstName.toLowerCase().trim();
console.log(`Your username is ${lowerCaseName}${favoriteNumber}`);

//PART 5: EXTENSION CHALLENGE
let firstName = prompt("Enter your first name: ")
let favoriteNumber = Number(prompt("Enter your favorite number: "));

let lowerCaseName = firstName.toLowerCase().trim();
const username = (name) => {
    if(name.length > 8){
        return name.slice(0, 8);
    
    }
    return name;
}
const result = username(lowerCaseName)
console.log(`Your username is ${result}${favoriteNumber}`);




//Activity 4: Text and Numbers 
//1. Math.random() is used to generate a number btween 0 and 1 and could be used when developing a program that needs to make a random choice like a ludo game or rock, paper and scissors game
//2. To check if a text contains a certain character, I will use the .includes() method.
//3. .slice() slice out a part of the array or string using start and stop index and return a new value. The stop index is excluded. The .split() method split the string or array at a particular character or symbol provided as argument

//PART B:PREDICT THE OUTPUT
//Snippet A: 
console.log(Math.roud(4.5)) //5   
console.log(Math.floor(4.9)) //4    
console.log(Math.ceil(4.1)) //5

//Snippet B: 
let phrase = "I love JavaScript";
console.log(phrase.includes("love")) //true
console.log(phrase(split(" "))); // ["I", "love", "JavaScript"]

//Snippet C
let num = 7;
console.log(Math.max(num, 10, 3)); //10
console.log(Math.min(num, 10, 3)) //3

//PART 3: DEBUGGING CHALLENGE
let score = 87.6;
let rounded = Math.round(score); //round was originally capitalized in the first letter
console.log("Rounded score: " + rounded); //the plus symbol was originally missing

let sentence = "Learning code is fun";
let firstWord = sentence.split(" ")[0];
console.log(firstWord); //"firstWord" was originally "firstword" with small letter "w"


//PART 4: COLLABORATIVE TECHNICAL CHALLENGE
//Build a "Grade Rounder and Reporter"
let studentName = prompt("Kindly enter your name pls: ");
let score = Math.round(prompt("Kindly enter your exact score: "));
studentName = studentName.toUpperCase()

console.log("========== GRADE REPORT =========")
console.log(`NAME: ${studentName}\nROUNDED SCORE: ${score}`)

//PART 5: EXTENSION CHALLENGE
// Add Math.random() to simulate a "bonus point" between 0 and 5 that gets added to the score before rounding. Discuss how you'd make sure the random bonus is always a whole number.
let studentName = prompt("Kindly enter your name pls: ");
studentName = studentName.toUpperCase();

let score = prompt("Kindly enter your exact score: ");
let bonusPoint = Math.round(Math.random() * 5);
let totalScore = score + bonusPoint;
totalScore = Math.round(totalScore)

console.log("========== GRADE REPORT =========");
console.log(`You've been given a bonus point of ${bonusPoint} `)
console.log(`NAME: ${studentName}\nROUNDED SCORE PLUS BONUS: ${totalScore}`)


//ACTIVITY 5: DECISION MAKERS
//Part 1: Group Discussion
//1. It means a program deciding the course of action when options are available like deciding what to display to a user based on their time zone or preference
//2. = is assignment opeartor. == is lose equal to operator while === is the strict equality sign in JS. If a program needs to compare both value and type, using the lose equality may cause a bug.
//3. Only one block will run because you're essentially saying if this does not happen, then this should happen and if by any chance any of then didn't happen, this do this as last option. It's like my wife sending me to the superstore and saying: Dear, buy a bag of organic sweet potatos. If that is not available, then buy inorganic sweet potato provided it's not GMO. If that is not available also then just buy any potato that is available.
//4. && help the program to know what conditions must all be met before an action is taken. || help the program to know that the all conditions does not not to be met. if it is raining and you have an umbrella, you can come out with your laptop and phone in your hand. If it's shining or cloudy,  you can come out with your laptop and phone in your hand.

//Part 2: Predict the Output
//Snippet A
let temperature = 15;
if(temperature > 30){
    console.log("It's hot");
}else if(temperature > 15){
    console.log("It's warm");
}else{
    console.log("It's cool");
} // It's cool!

//Snippet B
let age = 20;
let hasID = false;
if(age >= 18 && hasID){
    console.log("You may enter")
}else{
    console.log("Entry denied");
} //Entry denied

//Snippet C
let password = "1234";
if(password === "0000"){
    console.log("Password changed!");
}else{
    console.log("No change.");
} // No change.

//Part 3: Debugging Challenge
let hour = 14;
if(hour < 12){
    console.log("Good morning");
}else if(hour < 18){
    console.log("Good afternoon");
}else{
    console.log("Good evening");
} // originally, the first if statement was missing a closing curly brace.

//Part 4: Collaborative Technical Challenge
// Scenario: Build a "Movie Ticket Pricer" that asks for a person's age and whether it's a weekday or weekend, then decides the ticket price using conditional logic (e.g., discounts for children, seniors, or weekday showings). 
let age = Number(prompt("Enter your age"));
let week = prompt("Is it weekday: Yes/No");
week = week.toUpperCase();

const movieTicketPricer = (age, week) =>{
    if(age <= 12 && week === "NO" ){
        console.log("You have a discount applied");
    } else if(age <= 12 && week === "YES"){
        console.log("There's no discount for you");
    } else if (age >= 70 && week === "NO"){
        console.log("You have discount applied to your ticket");
    } else if (age >= 70 && week === "YES"){
        console.log("Sorry sir, no discount for you today");
    } else{
        console.log("Regular charges applied");
    }
}
const result = movieTicketPricer(age, week);
console.log(result);








//Activity 6: Shortcuts and Choices 
//1. It means I can write if/else statement in a single line
//2. Ternary operator cannot replace an If/elseif/else with three branches because it can only handle two branches. It is also not as readable as the if/else statement
//3. Ternary operator make code harder to read when there are multiple conditions to check. It is also not as readable as the if/else statement. I would stick with regular if/else when there are multiple conditions to check. I would use ternary operator when there are only two conditions to check and the code is simple enough to be written in a single line.

//Part 2: Predict the Output
//Snippet A
let score = 72;
let result = score >= 50 ? "Pass" : "Fail";
console.log(result); // Pass

//Snippet B
let cartTotal = 0;
let message = cartTotal > 0 ? "Proceed to checkout" : "Your cart is empty";
console.log(message); // Your cart is empty

//Snippet C
let stock =5;
console.log(`Stock status: ${stock > 0 ? "Available" : "Out of stock"}`); // Stock status: Available

//Part 3: Debugging Challenge
let temperature = 28;
let feeling = temperature > 25 ? "hot" : "cold"; 
console.log(feeling); //originally, colon was missing after "hot"

let isMember = true;
let discount = isMember ? 10 : 0;
console.log(`Discount: ${discount}%`); //originally, back second tick was missing after the percentage sign







//Activity 7: Repeat After Me 
//Part 1: Group Discussion
//1. A programmer will choose to use a loop instead of writing the same code multiple times because it saves time and makes the code cleaner and easier to read. It also allows for easier maintenance and updates, as changes can be made in one place rather than in multiple instances of the same code.
//2. The difference between a while loop and a for loop is that a while loop continues to execute as long as a specified condition is true, while a for loop has a defined number of iterations and includes initialization, condition, and increment/decrement in its syntax. I will choose to use a while loop when the number of iterations is not known beforehand, and a for loop when the number of iterations is known or can be determined.
//3. Infinite loop is a loop that continues to execute indefinitely because the terminating condition is never met. What causes it is when a programmer forgot to add a terminating condition to the code. I would look for a terminating condition in the code and add it if it is missing. I would also check the logic of the loop to ensure that it will eventually meet the terminating condition.
//4. If a loop is suppoesd to run 5 times but only runs 4 times, I would check the loop's terminating condition and ensure that it is set correctly.

//Part 2: Predict the Output
//Snippet A
for (let i = 1; i <= 5; i++) {
    console.log(i);
} // 1, 2, 3, 4, 5

//Snippet B
let count = 3;
while (count > 0) {
    console.log(`Countdown: ${count}`);
    count--;
}
console.log("Lift off!"); // Countdown: 3, Countdown: 2, Countdown: 1, Lift off!

//Snippet C
for (let i =0; i < 10; i = i + 2) {
    console.log(i);
} // 0, 2, 4, 6, 8


//Part 3: Debugging Challenge
let total = 0;
for (let i = 1; i <= 5; i++) {
    total = total + i;
}
console.log("Total: "+ total); // No bug here, but originally, the semicolon was missing after the total = total + i statement.

let count = 5;
while (count > 0) {
    console.log(count);
    count--; // originally, the decrement operator was missing after the count variable.
}


//Activity 8: Reusable Machines 
//Part 2: Predict the Output
//Snippet A
function greet(name){
    console.log("Hello, " + name + "!");
}
greet("Ifeoma"); // Hello, Ifeoma!
greet("David"); // Hello, David!

//Snippet B
function addNumbers(a, b){
    console.log(a + b);
}
addNumbers(4, 7); // 11
addNumbers(10); // NaN

//Sinppet C
function sayHi(){
    console.log("Hi there!");
}
console.log("Before calling function");
sayHi();
console.log("After calling function"); // Before calling function, Hi there!, After calling function

//Part 3: Debugging Challenge
function calculateArea(length, width){
    console.log(length * width);
} // originally, the closing curly brace was missing after the console.log statement.

function displayMessage(msg){
    console.log(msg);
}

displayMessage("Area calculator ready");
calculateArea(5, 10); // originally, the function was called with capital "C" instead of small "c".

//Part 4: Collaborative Technical Challenge
// Scenario: Build a "Tip Calculator Toolkit" made of two functions: one that calculates a tip based on a bill amount and tip percentage, and another that displays a formatted final message. 

//Fucntion that calculates a tip based on a bill amount and tip percentage
function calculateTip(billAmount, tipPercentage){
    return billAmount * (tipPercentage / 100);
}

//Function that displays a formatted final message
function displayFinalMessage(billAmount, tipPercentage, tipAmount){
    console.log(`For a bill amount of $${billAmount} with a tip percentage of ${tipPercentage}%, the tip amount is $${tipAmount.toFixed(2)}.`);
} // .tofixed(2) is used to round the tip amount to two decimal places for better readability

//Main program
const billAmount = Number(prompt("Enter the bill amount: "));
const tipPercentage = Number(prompt("Enter the tip percentage: ")); 
const tipAmount = calculateTip(billAmount, tipPercentage);
displayFinalMessage(billAmount, tipPercentage, tipAmount);


//Part 5: Extension Challenge
//Add a third function that calculates the total bill split evenly between a given number of people 
function calculateTotalPerPerson(billAmount, tipAmount, numberOfPeople){
    const totalAmount = billAmount + tipAmount;
    return totalAmount / numberOfPeople;
}


//Activity 9: Functions Expressions and Arrow Functions
//part 1: Group Discussion
//. What makes a function "anonymous" is that it does not have a name. It is often used as a value that can be assigned to a variable or passed as an argument to another function. Since it has no name, Javascript know when to run it when it is called by the variable name or passed as an argument to another function. 
//2. A programmer may choose an arrow function over a regular function because it has a shorter syntax and does not have its own "this" context, which can be useful in certain situations. Arrow functions are also often used in functional programming and when working with higher-order functions. However, arrow functions cannot be used as constructors and do not have their own "arguments" object, which may limit their use in some cases.
//3. I will call it by the variable name it is assigned to. For example, if I assign an anonymous function to a variable called "myFunction", I can call it by writing "myFunction()".
//4. Arrow functions are sometimes written even shorter, like (num) => num * num. What happened to the curly braces and the word "return" is that when an arrow function has a single expression, the curly braces and the "return" keyword can be omitted. The value of the expression is automatically returned. This is known as an implicit return. However, if the arrow function has multiple statements, curly braces and the "return" keyword are required to define the function body and specify what value to return.

//Part 2: Predict the Output
//Snippet A
const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(3, 4)); // 12

//Snippet B
const double = (num) => num * 2;
console.log(double(6)); // 12
console.log(double(0)); // 0

//Snippet C
const introduce = (name, age) => {
    console.log(`My name is ${name} and I am ${age} years old.`);
};
introduce("Zainab", 22); // My name is Zainab and I am 22 years old.

//Part 3: Debugging Challenge
const greetUser = (name) => {
    console.log("Welcome, " + name);
}
greetUser("Emeka"); // originally, the function was called with small "u" instead of capital "U".

const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // No bug here except for the missing semicolon after the functiion and after the console.log statement.

//Part 4: Collaborative Technical Challenge
// Scenario: Build a small "Math Helper Toolkit" using arrow functions for common calculations a student might need: converting a percentage to a decimal, calculating a rectangle's area, and converting Celsius to Fahrenheit. 

//Math Helper Toolkit
const percentageToDecimal = (percentage) => percentage / 100;
const rectangleArea = (length, width) => length * width;
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

//Part 5: Extension Challenge
// Add an arrow function that takes a Fahrenheit temperature and converts it back to Celsius, then use it to check that your two conversion functions "undo" each other correctly. 
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;    
console.log(celsiusToFahrenheit(100)); // 212
console.log(fahrenheitToCelsius(212)); // 100


//Activity 10: Build-a-Program Challenge 
