
//Part 3: Debugging Challenge
1
let total = 0;
for (let i = 1; i <= 5; i++) {
    total = total + i; // There no error in code except the missing semicolon after the total = total + i 
}
console.log("Total: " + total);


// 2

// let count = 5;
// while (count > 0) {
//     console.log(count); // There is no condition given
// }

// corrected version

let count = 5;
while (count > 0) {
 console.log(count); 
     count--;
}