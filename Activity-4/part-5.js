
//Part 5: Extension Challenge


let studentName = prompt("Enter your name:");
let numericScore = Number(prompt("Enter your score:"));
let bonusPoint = Math.floor(Math.random() * 5); 
let totalScore = numericScore + bonusPoint;
totalScore = Math.round(totalScore);
let capitalisedName = studentName.toUpperCase().trim();

console.log(`Hello ${capitalisedName}, Your total score plus bonus is: ${totalScore}`); 






