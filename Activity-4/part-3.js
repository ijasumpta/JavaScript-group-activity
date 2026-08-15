
// Part 3: Debugging Challenge 
// (i)
// let score = 87.6;
// let rounded = Math.Round(score); // Math.Round(score);  This is incorrect because JavaScript is case-sensitive.it should be Math.round(score);
// console.log("Rounded score: " rounded); // ommitted a + sign after "Rounded score: "

// corrected version
let score = 87.6;
let rounded = Math.round(score);
console.log("Rounded score: " + rounded); // will output Rounded score: 88

// (ii)
// let sentence = "Learning to code is fun"
// let firstWord = sentence.split(" ") [0]  
// console.log(firstword);  // firstword in the console is not written in camel case as originally declared

// Corrected version

let sentence = "Learning to code is fun"
let firstWord = sentence.split(" ") [0]  // will output Learning 
console.log(firstWord);