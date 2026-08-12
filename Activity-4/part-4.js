
// Step 1. Understand the Problem:
/*
This program is designed to help students calculate there overall score
for the term and round the result to the nearest whole number.
 At the end, the program will output the score and the students name to upperCase.


 Step 2. The student Name and the numeric score

 Step 3. Math.round , toUpperCase, .trim and  Number

 Step 4. Hello $student name, your total score has been rounded up to  $numeric scroe

 Step 5.(i) Variable declaration
     (ii) prompt user to input data
     (iii) convert numeric decimal to a whole number
     (iv) convert small cases to an upperCase
     (v) Display result
*/  
//  Step 6 Write the Code:

let studentName = prompt("Enter your name:");
let numericScore = Number(prompt("Enter your score:"));
numericScore = Math.round(numericScore);
let capitalisedName = studentName.toUpperCase().trim();         
console.log(`Hello ${capitalisedName}, Your total score is: ${numericScore}`); 


/*
step 7 output   Hello CHUKA your total score is: 100

     Hello    BISI,    Your total score is: 89
     Hello BISI, Your total score is: 89
*/ 

// Step 8 trimming the name before upperCasing it will make the program more realiable and cleaner 
