
// ********* Part 3: Debugging Challenge ****************

/* No 1
let userAge = prompt("Enter your age:");
let nextYearAge = userAge + 1;
console.log("Next year you will be " + nextyearAge);  // The variable name nextyearAge is not equal to the variable name that is concatinated in the console.log
*/
// corrected version
let userAge = prompt("Enter your age:");
let nextYearAge = userAge + 1;
console.log("Next year you will be " + nextYearAge); 


/*
// 2 
let city = "lagos"
console.log(city.ToUpperCase()); // The ToUpperCase in the console.log is wrongly spelt that means is not a function
*/
//corrected version
let city = "lagos";
console.log(city.toUpperCase());