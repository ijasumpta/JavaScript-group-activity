// Part 1: Group Discussion
//1. You can use a variable to store the name because variable allows you store an data with a name and use the data later
//2. console.log() is used to display something to the screen and especially useful when debugging. alert() is used to display a  message to the user to acknowledge. prompt() is used to recieve input from the user while corfim() is used to ask the user for binary decision
//3. let allow you to declare a variable and reassign it to a different value later while const does not. A programmer may choose const because he doesn't want to accidentally reassign a variable whose value should not change
//4. Different datatypes help JS to perform different oprations correctly. It is like having different tools for different job. trying to use screw driver to drive down a nail will not work well
//5. It may cause consistency problem

//PART B: PREDICT THE OUTPUT
//Snippet A: 25 & twenty-five
//Snippet B: Is it raining? true
//Snippet C: Undefined

//PART 3: DEBUGGING CHALLENGE
//userName didn't end with a semicolon and favoriteColor started with a capital C

//PART 4: The program first need to receive as input the name and age and store it in a variable. The the program will need to subtract the age from the current year to get the year the user is born. The program will need to return the year which then will be assigned to a variable which then will be concatenated (or use template literal) to add display the age and the birth year.
const userName = prompt("What is your name: ");
const age = Number(prompt("What is your age: "));

function birthYear(age){
    const currentYear = new Date().getFullYear();
    return currentYear - age;
}
const yearOfBirth = birthYear(age);
console.log(`Welcome ${userName}, your birth year is ${yearOfBirth}`)


//PART 5: EXTENSION CHALLENGE
//We use prompt() to receive one more string input and store with a variable. Then concatenate it with the other information




//Activity 2: Building Sentences with Code
//Part 1: Group Discussion
//1. There is no difference between the two. JS use s the + symbol to join strings together as well as add numbers together
//2. I find the one with template literal easier to read because it is cleaner
//3. JS will the two together which will result to 55
//4. Regular quote is already used for string

//PART B: PREDICT THE OUTPUT
//Snippet A: console.log(a + b); //105         console.log(a - b); //5
//Snippet B: Total cost: $60
//Snippet C: console.log("Result: " + x + y); //Result: 6          console.log("Result: " + (x + y)); //Result: 6

//PART 3: DEBUGGING CHALLENGE
//1. You cannot do variable concatenation 
//2. The itemPrice is supposed to be a number but its a string

//PART 4: COLLABORATIVE TECHNICAL CHALLENGE
const itemName = prompt("What item did you purchase? ");
const itemPrice = Number(prompt("What is the price? "));
const itemQty = Number(prompt("What is the quantity? "));

const receiptQenerator = ( item, Qty) => {
    return itemPrice * itemQty;
};

const result = receiptQenerator(itemPrice, itemQty);
const roundedResult = Math.round(result);

console.log("============= Receipt ===========");
console.log(`Item name: ${itemName} \nItem price: ${itemPrice} \nItem Quantity: ${itemQty}`);
console.log(`Total: #${roundedResult}`)


//PART 5: EXTENSION CHALLENGE
const itemName = prompt("What item did you purchase? ");
const itemPrice = Number(prompt("What is the price? "));
const itemQty = Number(prompt("What is the quantity ? "));
const discount = prompt("Do you have a discount code? ");
const discountAmount = 10000;

const receiptQenerator = ( item, Qty) => {
    if(discount === 'yes'){
        return (itemPrice * itemQty) - discountAmount;
    }
    return itemPrice * itemQty;
};  

const result = receiptQenerator(itemPrice, itemQty);
const roundedResult = Math.round(result);


console.log("============= Receipt ===========");
console.log(`Item name: ${itemName} \nItem price: ${itemPrice} \nItem Quantity: ${itemQty}`);
console.log(`Total: #${roundedResult}`)





//ACTIVITY 3: THE TYPE DETECTIVE AGENCY
//PART 1: GROUP DISCUSSION
//1. Prompt returning a string could cause a bug because if a program expect a number bug got a string, it may not be able to properly perfom mathematical operation on it accurately. This can be fixed by converting the string data type to number using Number() method

//2. Number() returns a floating point or an integer by trying to convert the entire value of input. parseInt() convert to integer without the number(s) after demical point if the number is a decimal number. parseFloat() convert to integer while preserving the demical point. parseInt() would be useful where a programmer wants the program to calculate an average and return only the number before the decimal point

//3. .toUppercase() does not change the original string because strings are immutable. Rather it returns a new string
let userName = "peter"; // let was used here because const will return a referrence error
const capitalName = userName.toUpperCase();

console.log(userName); //peter
console.log(capitalName); //PETER

//4. If the user is required to type a particular number of string as in the case of password to ensure it meets the minimum or essay response to ensure it doesn't exceed the maximum number of text

//5. A real world scenario would be when asking users for price of an item using prompt

//PART B: PREDICT THE OUTPUT
//Snippet A: console.log(input + 8) //428                   console.log(converted + 8) //50
//Snippet B: console.log(name.trim()) //chidinma            console.log(name.length) //8
//Snippet C: console.log(word.toUpperCase()) //JAVASCRIPT   console.log(word) //javascript

//PART C: DEBUGGING CHALLENGE
//1. userAge variable needs to be converted into number first before using it
let userAge = Number(prompt("Enter your age:"));
let nextYearAge = userAge + 1;
console.log("Next year, you will be " + nextYearAge);

//2. The .toUpperCase string method uses a capital letter T instead of small letter t. The variable also didn't end with a semicolon.
let city = "Lagos";
console.log(city.toUpperCase());


//PART 4: COLLABORATIVE TECHNICAL CHALLENGE
let firstName = prompt("Enter your first name: ")
let favoriteNumber = Number(prompt("Enter your favorite number: "));

let lowerCaseName = firstName.toLowerCase().trim();
console.log(`Your username is ${lowerCaseName}${favoriteNumber}`);

//PART 5: EXTENSION CHALLENGE
let firstName = prompt("Enter your first name: ")
let favoriteNumber = Number(prompt("Enter your favorite number: "));

let lowerCaseName = firstName.toLowerCase().trim();
const username = (name) => {
    if(name.length > 8){
        return name.slice(0, 8);
    
    }
    return name;
}
const result = username(lowerCaseName)
console.log(`Your username is ${result}${favoriteNumber}`);




//Activity 4: Text and Numbers 
//1. Math.random() is used to generate a number btween 0 and 1 and could be used when developing a program that needs to make a random choice like a ludo game or rock, paper and scissors game
//2. To check if a text contains a certain character, I will use the .includes() method.
//3. .slice() slice out a part of the array or string using start and stop index and return a new value. The stop index is excluded. The .split() method split the string or array at a particular character or symbol provided as argument

//PART B:PREDICT THE OUTPUT
//Snippet A: 
console.log(Math.roud(4.5)) //5   
console.log(Math.floor(4.9)) //4    
console.log(Math.ceil(4.1)) //5

//Snippet B: 
let phrase = "I love JavaScript";
console.log(phrase.includes("love")) //true
console.log(phrase(split(" "))); // ["I", "love", "JavaScript"]

//Snippet C
let num = 7;
console.log(Math.max(num, 10, 3)); //10
console.log(Math.min(num, 10, 3)) //3

//PART 3: DEBUGGING CHALLENGE
let score = 87.6;
let rounded = Math.round(score); //round was originally capitalized in the first letter
console.log("Rounded score: " + rounded); //the plus symbol was originally missing

let sentence = "Learning code is fun";
let firstWord = sentence.split(" ")[0];
console.log(firstWord); //"firstWord" was originally "firstword" with small letter "w"


//PART 4: COLLABORATIVE TECHNICAL CHALLENGE
//Build a "Grade Rounder and Reporter"
let studentName = prompt("Kindly enter your name pls: ");
let score = Math.round(prompt("Kindly enter your exact score: "));
studentName = studentName.toUpperCase()

console.log("========== GRADE REPORT =========")
console.log(`NAME: ${studentName}\nROUNDED SCORE: ${score}`)

//PART 5: EXTENSION CHALLENGE
// Add Math.random() to simulate a "bonus point" between 0 and 5 that gets added to the score before rounding. Discuss how you'd make sure the random bonus is always a whole number.
let studentName = prompt("Kindly enter your name pls: ");
studentName = studentName.toUpperCase();

let score = prompt("Kindly enter your exact score: ");
let bonusPoint = Math.round(Math.random() * 5);
let totalScore = score + bonusPoint;
totalScore = Math.round(totalScore)

console.log("========== GRADE REPORT =========");
console.log(`You've been given a bonus point of ${bonusPoint} `)
console.log(`NAME: ${studentName}\nROUNDED SCORE PLUS BONUS: ${totalScore}`)