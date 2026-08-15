

//Part 2: Predict the Output
// Snippet A

function greet(name){
console.log("Hello, " + name + "!")
}

greet("Ifeoma"); // Hello, Ifeoma!
greet("David");  // Hello, David!

// Snippet B

function addNumbers(a, b){
console.log(a + b);
}

addNumbers(4, 7); // 11
addNumbers(10); // NaN

//Snippet C
function sayHi() {
console.log("Hi there!");
}

console.log("Before calling function"); 
sayHi();
console.log("After calling function");

/*Output

Before calling function
Hi there!
After calling function

*/