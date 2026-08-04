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
const itemPrice = prompt("What is the price? ");
const itemQty = prompt("What is the quantity? ");

const receiptQenerator = ( item, Qty) => {
    return itemPrice * itemQty;
};

const result = receiptQenerator(itemPrice, itemQty);
const roundedResult = Math.round(result);

console.log("============= Receipt ===========");
console.log(`Item name: ${itemName} \nItem price: ${itemPrice} \nItem Quantity: ${itemQty}`);
console.log(`Total: #${roundedResult}`)