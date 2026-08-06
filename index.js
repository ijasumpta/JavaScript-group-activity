const currentYear = new Date().getFullYear();

const userName = prompt("Enter your name:");
const userAge = Number(prompt("Enter your age:"));

const birthYear = currentYear - userAge;

alert(`Welcome, ${userName}!
You are ${userAge} years old.
You were born around ${birthYear}.`);

console.log("Name:", userName);
console.log("Age:", userAge);
console.log("Birth Year:", birthYear);

// Extension
const favoriteHobby = prompt("What is your favorite hobby?");
alert(`Hello ${userName}! Your favorite hobby is ${favoriteHobby}.`);



