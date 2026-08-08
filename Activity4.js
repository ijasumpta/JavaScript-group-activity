//Activity 4: Text and Numbers 


1.//Why Math.random()
//It creates unpredictable numbers. Games, quizzes, lotteries, password generators and simulations use randomness.
//2. Checking text
//Use .includes(). Example: 'test@example.com'.includes('@') returns true.
//3. .slice() vs .split()
//.slice() cuts out part of a string. 'Hello'.slice(1,4)->'ell'. .split() breaks a string into an array. 'a,b,c'.split(',')->['a','b','c'].

//Collaborative Technical Challenge
//Step 1
//Build a program that asks for a student's name and score, rounds the score, converts the name to uppercase, and displays both.
//Step 2
//Inputs: student's name and numeric score.
//Step 3
//Processing: trim(), toUpperCase(), Number(), Math.round().
//Step 4
//Output example: STUDENT: GRACE\nROUNDED SCORE: 90
//Step 5
//Plan: Ask for name, ask for score, clean name, convert score to number, round score, display message.


const name = prompt("Enter student name:").trim().toUpperCase();
const score = Number(prompt("Enter score:"));
const rounded = Math.round(score);
alert(`STUDENT: ${name}\nROUNDED SCORE: ${rounded}`);


//grace,89.5 -> GRACE,90
//Chuka,100 -> CHUKA,100
//Bisi ,59.3 -> BISI,59

//.trim() removes unwanted spaces before converting to uppercase, making output cleaner and more reliable.

