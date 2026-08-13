

// Part 3: Debugging Challenge
/* 1
const greetUser = (name) => {
    console.log("Welcome, " + name)
}

greetuser("Emeka");  // will show greetuser is not defined because "user" was called with small letter u instead of capital U 
*/


// Corrected version
const greetUser = (name) => {
    console.log("Welcome, " + name)
}

greetUser("Emeka");  


// 2
const subtract = (a, b) => a - b;
console.log(subtract(10, 4));  // Theres no error in the code aside from the missing semicolon to close the function the console.log.
