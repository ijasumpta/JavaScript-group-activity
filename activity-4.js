/*
=========================================================================================================================================================================
--------------------------------------------------------------------------- JavaScript ----------------------------------------------------------------------------------
=========================================================================================================================================================================


=========================================================================== activity 4 ==================================================================================

PART 1. Group Discussion
=======
Ques-1. Why might a program need Math.random()? What kinds of programs use randomness? 

Ans.
Math.random() is a JavaScript method that generates a random decimal number. it generates a random decimal number between 0 (inclusive) and 1 (exclusive).
Eg.
Every time you run it, you get a different random decimal.
0.123456789
0.987654321
It can never return: 1

Uses; Programs use Math.random() whenever they need an unpredictable result, such as:
. Rolling a dice
. Picking a random winner in a raffle
. Generating random items in a game(lik random enemies)
. Playing songs in shuffle mode
. Shuffling a deck of cards
. Choosing a random background color
. Displaying a random motivational quote */

// Eg.
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

QUES-2. If you wanted to check whether a piece of text contains a certain word (like checking if an email contains "@"), what string method might help?

Ans.
The best method is: .includes() It checks whether a string contains another string.

It returns:
true
false
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
QUES- 3. Compare .slice() and .split(). What does each one actually produce? 

Ans.
.slice()
Purpose: It cuts out a section of the text and returns it as one new string.
Eg.
let word = "Chuka Mamah";
console.log(word.slice(0, 5)); // Out Put: Chuka

.split()
Purpose: Breaks a string into many pieces. it returns the pieces in an array.
Eg.
let fruits = "Orange,Apple,Kiwi";
console.log(fruits.split(",")); Output: ['Orange', 'Apple', 'Kiwi']
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Part 2: Predict the Output
====== 

// Snippet A
console.log(Math.round(4.5)); // Output: 5
console.log(Math.floor(4.9)); // Output: 4
console.log(Math.ceil(4.1)); // Output: 3

// Snippet B
let phrase = "I love JavaScript";
console.log(phrase.includes("love")); // Output: true
console.log(phrase.split(" ")); // Output: [ 'I', 'love', 'JavaScript' ]

// Snippet C
let num = 7;
console.log(Math.max(num, 10, 3)); // Output: 10
console.log(Math.min(num, 10, 3)); // Output: 3
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Part 3: Debugging Challenge
Q1. 
let score = 87.6;
let rounded = Math.Round(score);
console.log("Rounded Score: " rounded);

Q2.
let sentence = "Learning to code is fun"
let firstWord = sentence.split(" ") [0]
console.log(firstword);

Ans.
The codes has two mistakes that will cause errors.

Q1 has Incorrect method name Math.Round(score);
it should be Math.round(score);
it is also missing + in console.log()

Correct code is:*/
let score = 87.6;
let rounded = Math.round(score);
console.log("Rounded Score: " + rounded); // Output: Rounded Score: 88

/*
Q2. has Incorrect variable in console
also add ; after [0]
correct code is: */

let sentence = "Learning to code is fun"
let firstWord = sentence.split(" ") [0];
console.log(firstWord); // Output: Learning
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


Part 4: Collaborative Technical Challenge Scenario: Build a "Grade Rounder and Reporter" that asks for a student's exact numeric score, rounds it, and builds a message reporting the rounded score along with the student's name in all uppercase. 

Step 1 — Understand the Problem: Explain the goal in your own words.
Ans.
The goal of the program is to ask the user for a student's name and exact score, round the score to the nearest whole number, convert the student's name to uppercase, and display a neatly formatted grade report.
----------
Step 2 — Identify Inputs: What does the program need from the user?
Ans.
The program needs:
. The student's name.
. The student's exact numeric score (which may include decimals).
----------
Step 3 — Identify Processing: What Math and string methods will you need?
Ans.
. Math Method we need is: Math.round() – Rounds the numeric score to the nearest whole number.
. String Method we need is : .toUpperCase() – Converts the student's name to uppercase letters.
----------
Step 4 — Identify Outputs: What should the final message look like?
The program should display a message similar to:
===== GRADE REPORT =====
Student: JOHN DOE
Rounded Score: 89

Or using a sentence: JOHN DOE scored a rounded grade of 89.
----------
Step 5 — Plan the Solution: Write your plan in plain English first.
Solution Plan
. Ask the user to enter the student's name.
. Ask the user to enter the student's exact score.
. Convert the score from text to a number.
. Round the score to the nearest whole number using Math.round().
. Convert the student's name to uppercase using .toUpperCase().
. Display the student's uppercase name and rounded score using a template literal.
----------
Step 6 — Write the Code: Combine Math methods, string methods, and template literals. 
Ans.*/

{
 let studentName = prompt("Enter the student's name:");  // Ask for the student's name
 let exactScore = Number(prompt("Enter the student's exact score:"));  // Ask for the student's exact score
 // Process the data
 let roundedScore = Math.round(exactScore);
 let upperName = studentName.toUpperCase(); 

 // Display the result
 console.log(`
 ========== GRADE REPORT ==========
 Student: ${upperName}
 Rounded Score: ${roundedScore}
 ==================================
 `);

 alert(`${upperName} scored a rounded grade of ${roundedScore}.`);
}
/*
Input: 
Student Name: Prince Mamah
Exact Score: 98.6

Output:
========== GRADE REPORT ==========
Student: PRINCE MAMAH
Rounded Score: 99
==================================
---------
Step 7 — Test the Program:
Name: "grace", Score: 89.5 
Name: "Chuka", Score: 100 
Name: " Bisi " (extra spaces), Score 59.3 

Ans.
Test the Program

Test Case 1
Input

Name: "grace"
Score: 89.5

Processing
`Math.round(89.5)` → `90`
`"grace".toUpperCase()` → `"GRACE"` */

{
 let studentName = "grace";
 let exactScore = 89.5;

 let roundedScore = Math.round(exactScore);
 let upperName = studentName.toUpperCase();

 console.log(`
 ========== GRADE REPORT ==========
 Student: ${upperName}
 Rounded Score: ${roundedScore}
 ==================================
 `);
}

/* Output
========== GRADE REPORT ==========
Student: GRACE
Rounded Score: 90
==================================

Test Case 2
Input

Name: "Chuka"
Score: 100

Processing
`Math.round(100)` → `100`
`"Chuka".toUpperCase()` → `"CHUKA"` */
{
 let studentName = "Chuka";
 let exactScore = 100;

 let roundedScore = Math.round(exactScore);
 let upperName = studentName.toUpperCase();

 console.log(`
 ========== GRADE REPORT ==========
 Student: ${upperName}
 Rounded Score: ${roundedScore}
 ==================================
 `);
}

/* Output
========== GRADE REPORT ==========
Student: CHUKA
Rounded Score: 100
==================================

Test Case 3

Input
Name: " Bisi " (contains extra spaces)
Score: 59.3

Processing
`Math.round(59.3)` → `59`
`" Bisi ".toUpperCase()` → `" BISI "` (spaces remain because `.toUpperCase()` does not remove spaces)*/
{
 let studentName = " Bisi ";
 let exactScore = 59.3;

 let roundedScore = Math.round(exactScore);
 let upperName = studentName.toUpperCase();

 console.log(`
 ========== GRADE REPORT ==========
 Student: ${upperName}
 Rounded Score: ${roundedScore}
 ==================================
 `);
}

/* Output (without using `.trim()`)
========== GRADE REPORT ==========
Student:  BISI 
Rounded Score: 59
==================================

using `.trim()` */

let studentName = " Bisi ";
let exactScore = 59.3;

let roundedScore = Math.round(exactScore);
let upperName = studentName.trim().toUpperCase();

console.log(`
========== GRADE REPORT ==========
Student: ${upperName}
Rounded Score: ${roundedScore}
==================================
`);

/* Then the output becomes:
========== GRADE REPORT ==========
Student: BISI
Rounded Score: 59
==================================

========== Conclusion ============

| Test Case | Input Name | Input Score | Rounded Score | Final Name                                   |
| --------- | ---------- | ----------: | ------------: | -------------------------------------------- |
| 1         | grace      |        89.5 |            90 | GRACE                                        |
| 2         | Chuka      |         100 |           100 | CHUKA                                        |
| 3         | `Bisi`     |        59.3 |            59 | BISI                                         | after using `.trim().toUpperCase()`

This testing confirms that:
. `Math.round()` correctly rounds decimal scores.
. `.toUpperCase()` converts names to uppercase.
. `.trim()` removes unwanted spaces before displaying the name, producing cleaner output.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Step 8 — Improve the Solution: Discuss whether trimming the name before uppercasing it would make the program more reliable. 
Ans.
Yes, trimming the student's name before converting it to uppercase makes the program more reliable.
When users type their names, they may accidentally add extra spaces at the beginning or end. The .trim() method removes these unnecessary spaces, ensuring the name is clean before it is processed.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Part 5: Extension Challenge Add Math.random() to simulate a "bonus point" between 0 and 5 that gets added to the score before rounding. Discuss how you'd make sure the random bonus is always a whole number.
Ans.
The program can generate a random bonus between 0 and 5, add it to the student's score, and then round the final result before displaying it.

How it work
. Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
. Multiplying by 6 gives a number between 0 and 5.999....
. Math.floor() removes the decimal part, resulting in a whole number from 0 to 5.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/