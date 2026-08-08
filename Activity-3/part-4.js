
 // ************** Part  4  ******************

 // Step 1. The final output Is going to print out the person firstname to lowercase and the favourite number
 // Step 2 The persons first name and the persons favorite number
 // Step 3 The number conversion.....
 // Step 4 will output the first name together with the favorite number but the first name will be in a lowerCase
// Step 5 Create two variable called firstname and favorite number covert the favorite number to a number type then create a variable name called username which holds the concatination of first name and favorite number
// Step 6 

 
let firstName = prompt("Enter your first name: ")
let favoriteNumber = Number(prompt("Enter your favorite number: "));

let lowerCaseName = firstName.toLowerCase().trim();
console.log(`Your username is ${lowerCaseName}${favoriteNumber}`);