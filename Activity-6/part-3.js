

// Part 3: Debugging Challenge (i)

// let temperature = 28;
// let feeling = temperature > 25 ? "hot" "cold"; // ommitted the else statement : after hot
// console.log(feeling);

// corrected version 

let temperature = 28;
let feeling = temperature > 25 ? "hot" : "cold"; //  hot
console.log(feeling);

// (ii)
// let isMember = true
// let discount = isMember ? 10 : 0;    
// console.log(`Discount: ${discount}%); //  second back tick is missing after the percentage sign

// corrected version 

let isMember = true;
let discount = isMember ? 10 : 0;
console.log(`Discount: ${discount}%`);  // Discount: 10%