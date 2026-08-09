const prompt = require("prompt-sync")();

  //  Activity - 1
    // Test Code
{
 let name = prompt("What is your name? ");
 let age = prompt("What is your age? ");

 console.log("Welcome, " + name + "! " + "You are " + age + " years old.");
};

  // A cleaner way with Template Literals is
{
 let user = prompt("What is your name? ");
 console.log(`Welcome, ${user}!`);
};

  //  Activity - 2
    // Test Code
{
 let firstName = prompt("What is your First Name? ");
 let lastName = prompt("What is your Last Name? ");
 let course = prompt("What Course are you studying? ");
 let school = prompt("Which School are you in? ");

 console.log(`Student Information

 Full Name: ${firstName} ${lastName}
 Course: ${course}
 School: ${school}`);
};

{
 let itmeName = prompt("Enter the item name");
 let itemPrice = Number(prompt("Enter the item price"));
 let quantity = Number(prompt("Enter quantity:"));
 let total = itemPrice * quantity;

 console.log(`======= items ========
 Item Name: ${itmeName} 
 Item Price: ₦${itemPrice}
 Quantiy: ${quantity}
 Total Price:Note ₦${total}
  ====================================
 `);
};

  // Activity - 3
    // Test Code
{
 let userName = "Apehmamah Chuka";

 console.log(userName.length); // Output: 15
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

  // Activity 4
    // Step 6
{
let studentName = prompt("Enter the student's name:");
let exactScore = Number(prompt("Enter the student's exact score:"));

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

{
  
 let studentName = prompt("Enter the student's name:");  // Ask for the student's name

 
 let exactScore = Number(prompt("Enter the student's exact score:"));  // Ask for the student's exact score
 let bonusPoint = Math.floor(Math.random() * 6);  // Generate a random bonus between 0 and 5
 let finalScore = exactScore + bonusPoint;  // Add the bonus to the score
 let roundedScore = Math.round(finalScore);  // Round the final score
 let upperName = studentName.trim().toUpperCase();  // Format the student's name

 // Display the result
 console.log(`
 ========== GRADE REPORT ==========
 Student: ${upperName}
 Original Score: ${exactScore}
 Bonus Point: ${bonusPoint}
 Final Score: ${roundedScore}
 ==================================
 `);
};

 // Activity 5
    // Step 6

{
  // Ask for user input
 let age = Number(prompt("Enter your age:"));
 let day = prompt("Is it a weekday or weekend?").toLowerCase().trim();

 let ticketPrice;

 // Determine the base ticket price
 if (age < 13) {
    ticketPrice = 5;
 } else if (age >= 65) {
    ticketPrice = 6;
 } else {
    ticketPrice = 10;
 }

 // Apply weekday discount
 if (day === "weekday") {
    ticketPrice -= 2;
 }

  console.log(`
  ======= MOVIE TICKET =======
  Age: ${age}
  Day: ${day}
  Ticket Price: $${ticketPrice}
  ============================
 `);
};