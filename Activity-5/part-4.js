// Part 4: Collaborative Technical Challenge
/*
Step 1 — 
Assuming maximum age is 100 years
For Children (0 - 13 years), all booking for weekend and weekdays would be given at a discount of 15%
For Seniors (>=65) all bookings on weekdays will have a discount of 15% but no discount for weekends 
For others will pay the standard ticket fee

Step 2:

user age
weekday
  

Step 3 — 
if the booking happens on weekday or not 

Step 4 —
     
it should display age, day and ticket price

Step 5 —

if the user is a child (0 - 13), reduce ticket price to 500 naira and apply discount of 15%
if on a weekday.
But if the user is a senior(65 yeras and above), reduce ticket price 600 naira and also apply 15% discount if on a weekday
However if user does not meet the above age condition let user pay the standard price of 1000 naira, only apply 15% discount if this user books on a weekday.


*/


// Step 6 — 

let age = Number(prompt("Enter your age:"));  
let day = prompt("Is it a weekday or weekend?").toLowerCase().trim();

let ticketPrice;
if (age < 13) {
ticketPrice = 500;
} else if (age >= 65) {
ticketPrice = 600;
} else {
ticketPrice = 1000;
}

let percentage = ticketPrice * 0.15;
if (day === "weekday") {
ticketPrice -= percentage;
}
console.log(`
======= MOVIE TICKET =======
Age: ${age}
Day: ${day}
Ticket Price: ₦${ticketPrice}
============================
`);




