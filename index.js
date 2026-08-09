// QUES1 

let userName = "Ape";

console.log("Welcome, " + userName + "!");


function greet() {
    return "Hello";
}

let message = greet();
console.log(greet());

let name = "Mamah";
let age = 25;
let city = "Enugu";

console.log(`My name is ${name}. I am ${age} years old and I live in ${city}.`);


let num1 = 15;
let num2 = 30;


console.log(`${num1} + ${num2} = ${num1 + num2}`);


let item = "Laptop";
let price = 350000;
let quantity = 2;

console.log(`========== RECEIPT ==========


Item: ${item}
Price: ₦${price}
Quantity: ${quantity}

Total: ₦${price * quantity}

=============================
`);

console.log(5 + "5");


let a = 10;
let b = "5";

console.log(a + b);
console.log(a - b);

{
 let price = 20;
 let quantity = 3;

 console.log(`Total: $${price * quantity}`);
}

let x = 4;
let y = 2;

console.log("result: " + x + y);
console.log("result: " + (x - y));

// Q.1
let firstName = "Tunde";
let lastName = "Okafor";
let fullName = firstName + " " + lastName;

console.log("Welcom, " + fullName + "!");


// Q.2
//Let itemPrice = "15";
// SOLUTION
let itemPrice = Number("15");
let total = itemPrice + 5;

console.log(`Your total is $${total}`);





{  
  let userName = "Amara"
console.log(userName);// Output -- Amara

const favoriteColor = "blue";
console.log(favoriteColor);// Output -- blue
}

// Activity 3

{
let userName = "Apehmamah Chuka";

console.log(userName.length);
}

{
  // Ask for the user's name
let userName = ("Apehmamah Chuka").trim();

// Check if the name is longer than 8 characters
if (userName.length > 8) {
    userName = userName.slice(0, 8);
}

// Display the username
console.log(`Welcome, ${userName}!`);
}

// Activity - 4

let email = "credoentertainment07mail.com";

console.log(email.includes("@")); // Output false

// Ques 3
let myName = "Chuka Mamah";
console.log(myName.slice(0, 5)); // Out Put: Chuka

let fruits = "Orange,Apple,Kiwi";
console.log(fruits.split(",")); //Output: ['Orange', 'Apple', 'Kiwi']

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

  // Part 3
//Q1
let score = 87.6;
let rounded = Math.round(score);
console.log("Rounded Score: " + rounded); // Output: Rounded Score: 88

// Q2.
let sentence = "Learning to code is fun"
let firstWord = sentence.split(" ") [0];
console.log(firstWord); // Output: Learning

  // Part 4
// Test Case 1
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

// Activity 5
 // Part 2: Predict the Output 

console.log("  For = Operator");
//Snippet A

let temperature = 15;

if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature > 15) {
    console.log("It's warm.");
} else {
    console.log("It's cool.");
};
// Output: It's cool.

console.log("  For && Operator");
// Snippet B

{
let age = 20;
let hasID = false;

if (age >= 18 && hasID) {
    console.log("You may enter.");
} else {
    console.log("Entry denied.");
}
};
// Output: Entry denied.

console.log("  For === Operator");
// Snippet C

let password = "1234";

if (password === "0000") {
    console.log("Password changed!");
} else {
    console.log("No change.");
};
// Output: No change.