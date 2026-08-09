/*
=========================================================================================================================================================================
--------------------------------------------------------------------------- JavaScript ----------------------------------------------------------------------------------
=========================================================================================================================================================================


=========================================================================== activity 5 ==================================================================================

//PART 1  Group Discussion
=======
QUES-1. What does it mean for a program to make a "decision"? Give a real-life example of a decision that could be written as an if statement. 

Ans.
A program makes a decision by checking whether a condition is true or false. Based on the result, it chooses which instructions to execute.
Eg. */
if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
};
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
QUES-2. What's the difference between =, ==, and ===? Why might using the wrong one cause bugs? 

Ans.
| Operator | Meaning                                                                   | Example               |
| -------- | ------------------------------------------------------------------------- | --------------------- |
| `=`      | Assignment operator (stores a value in a variable)                        | `let age = 20;`       |
| `==`     | Loose equality (compares values after converting data types if necessary) | `5 == "5"` → `true`   |
| `===`    | Strict equality (compares both value and data type)                       | `5 === "5"` → `false` |

Why can using the wrong one cause bugs?
. Using = instead of == or === accidentally changes a variable instead of comparing it.
. Using == may produce unexpected results because JavaScript automatically converts data types.
. Using === is usually safer because it checks both the value and the data type
Eg.
let number = 5;

console.log(number == "5");   // true
console.log(number === "5");  // false
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
QUES-3. If you have an if, an else if, and an else, can more than one block run? Discuss and explain your reasoning. 

Ans.
No. Only one block runs. JavaScript checks the conditions from top to bottom:
. It checks the if condition first.
. If the if condition is true, that block runs and the rest are skipped.
. If the if condition is false, JavaScript checks the else if.
. If the else if is true, it runs and the else is skipped.
. If none of the conditions are true, the else block runs. */
// Eg.
let score = 75;

if (score >= 80) {
    console.log("Excellent");
} else if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
} // output: Pass
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
QUES-4. How do && (AND) and || (OR) change the way a condition behaves? Can your group come up with an everyday sentence that uses "and" versus "or" logically?

Ans.
&& (AND)
The condition is true only if every condition is true.
Eg. */

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("You may enter.");
}
/*
The person must:
. Be 18 or older, and
. Have an ID.
Both conditions must be true.

Everyday sentence:

"You can enter the cinema if you are 18 or older AND(&&) have a valid ticket."
----------

|| (OR)
The condition is true if at least one condition is true.
Eg. */

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("You can stay home.");
}
/*
The person can stay home if:
. It is the weekend, or
. It is a public holiday.

Only one condition needs to be true.
Everyday sentence:
"You can travel by bus OR(||) train." You only need one option to travel.

Summary:
| Operator | Meaning         | When It Is True                            |    |                                     |
| -------- | --------------- | ------------------------------------------ | -- | ----------------------------------- |
| `=`      | Assigns a value | Stores a value in a variable               |    |                                     |
| `==`     | Loose equality  | Values are equal after type conversion     |    |                                     |
| `===`    | Strict equality | Values and data types are exactly the same |    |                                     |
| `&&`     | AND             | All conditions must be true                |    |                                     |
| `        |                 | `                                          | OR | At least one condition must be true |

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Part 2: Predict the Output 

Snippet A
Ans.
15 is not greater than 30 and 15 so the Output is: It's cool.

Snippet B
Ans.
20 is greater than 18:true, but but does not have ID:false
true && false is false. so Output is: Entry denied.

The person is old enough, but he/she does not have an ID. Both conditions must be true because the program uses the AND (&&) operator.

Snippet C
Ans.
password is "1234"
Compare "1234" === "0000" is false. Since the condition is false, the else block runs.

Output is: No change.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Part 3: Debugging Challenge 

let hour = 14;

if (hour < 12) {
    console.log("Good morning!");
else if (hour < 18) {
  console.log("Good afternoon!");
} else {
    console.log("Good evening!");
};

Ans.
The else if statement is missing an opening curly brace {
Output: Good afternoon!

Explanation
The program checks the conditions in order:
. If the hour is less than 12, it prints "Good morning!".
. Otherwise, if the hour is less than 18, it prints "Good afternoon!".
. If neither condition is true, it prints "Good evening!".
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Part 4: Collaborative Technical Challenge Scenario: Build a "Movie Ticket Pricer" that asks for a person's age and whether it's a weekday or weekend, then decides the ticket price using conditional logic (e.g., discounts for children, seniors, or weekday showings). 

Step 1 — Understand the Problem: Explain the pricing rules your group wants to use, in plain English. 

Ans.
The program should ask the user for their age and whether they are visiting on a weekday or weekend. Based on these answers, it should decide the correct movie ticket price using conditional statements.

Pricing Rules:
. Children (under 13 years): ₦500
. Adults (13–64 years): ₦1000
. Seniors (65 years and above): ₦600
. If it is a weekday, everyone gets a ₦200 discount.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Step 2 — Identify Inputs: What information does the program need? 

Ans.
The program needs two pieces of information from the user:
. The person's age.
. Whether it is a weekday or weekend.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Step 3 — Identify Processing: What conditions determine the final price? 

Ans. 
The program should:
. Check the person's age to determine the base ticket price.
. Check if it is a weekday.
. If it is a weekday, subtract ₦200 from the base price.
. Display the final ticket price.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Step 4 — Identify Outputs: What should the program display? 

Ans.
The program should display:
. The person's age.
. Whether it is a weekday or weekend.
. The final movie ticket price.

Output:
======= MOVIE TICKET =======
Age: 10
Day: weekday
Ticket Price: ₦300
============================
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Step 5 — Plan the Solution: Write out your decision logic as plain-English rules before coding. 

Ans.
Plan Solution
1. Ask the customer to enter their age.
2. Ask the customer whether they are buying a ticket for a weekday or a weekend.
3. If the customer is younger than 13 years old, charge ₦500 for the ticket.
4. Otherwise, if the customer is 65 years old or older, charge ₦600 for the ticket.
5. Otherwise, charge the regular ticket price of ₦1000.
6. If the ticket is for a weekday, reduce the ticket price by ₦200.
7. Finally, display the total ticket price the customer needs to pay.

Summary of the Pricing Rules
. Children (under 13): ₦500
. Seniors (65 and above): ₦600
. Everyone else: ₦1000
. Weekday discount: Subtract ₦200 from the ticket price.
. Weekend: No discount is applied.
. Display the final amount after applying any discount.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Step 6 — Write the Code: Implement your rules using if/else if/else. */

// Ans.
let age = Number(prompt("Enter your age:"));  // Ask for user input
let day = prompt("Is it a weekday or weekend?").toLowerCase().trim();

let ticketPrice;

// Determine the base ticket price
if (age < 13) {
    ticketPrice = 500;
} else if (age >= 65) {
    ticketPrice = 600;
} else {
    ticketPrice = 10;
}

// Apply weekday discount
if (day === "weekday") {
    ticketPrice -= 200;
}

// Display the result
console.log(`
======= MOVIE TICKET =======
Age: ${age}
Day: ${day}
Ticket Price: ₦${ticketPrice}
============================
`);
/*
Input:
Age: 70
Day: weekday

Output:
======= MOVIE TICKET =======
Age: 70
Day: weekday
Ticket Price: ₦400
============================

This solution demonstrates the use of:
. if, else if, and else statements for decision making.
. Comparison operators (<, >=, ===).
. String methods (.toLowerCase() and .trim()) to handle user input reliably.
. Template literals to display a formatted ticket receipt.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Step 7 — Test the Program: ● Age: 8, Day: weekday ● Age: 70, Day: weekend ● Age: 30, Day: weekend ● Age: 17, Day: weekday

Ans.

Test 1
Input

Age: 8
Day: weekday

Processing:
Age is less than 13 → Base price = ₦500
It is a weekday → Discount = ₦200
Final price = ₦300

Output:
======= MOVIE TICKET =======
Age: 8
Day: weekday
Ticket Price: ₦300
============================

Test 2
Input:

Age: 70
Day: weekend

Processing:
Age is 65 or older → Base price = ₦600
It is a weekend → No discount
Final price = ₦600

Output:
======= MOVIE TICKET =======
Age: 70
Day: weekend
Ticket Price: ₦600
============================

Test 3
Input:

Age: 30
Day: weekend

Processing:
Age is between 13 and 64 → Base price = ₦1000
It is a weekend → No discount
Final price = ₦1000

Output:
======= MOVIE TICKET =======
Age: 30
Day: weekend
Ticket Price: ₦1000
============================

Test 4
Input:

Age: 17
Day: weekday

Processing:
Age is between 13 and 64 → Base price = ₦1000
It is a weekday → Discount = ₦200
Final price = ₦800

Output:
======= MOVIE TICKET =======
Age: 17
Day: weekday
Ticket Price: ₦800
============================
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/