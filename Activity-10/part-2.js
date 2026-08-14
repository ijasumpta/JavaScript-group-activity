

// Part 2: Predict the Output
// Snippet A
const getDiscount = (total) => total >= 100 ? total * 0.1 : 0;

let orderTotal = 120;
let discount = getDiscount(orderTotal);
console.log(`Discount: $${discount}`);  // Discount: $12
console.log(`Final total: $${orderTotal - discount}`); // Final total: $108

// Snippet B

function classifyNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
    }
}

classifyNumbers(4);   
/*Output 
1 is odd
2 is even
3 is odd
4 is even
*/

// Snippet C
const formatName = (name) => name.trim().toUpperCase();

let rawInput = "  kelechi  ";
console.log(`Welcome, ${formatName(rawInput)}`);  // Welcome, KELECHI