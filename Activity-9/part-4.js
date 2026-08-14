
// Part 4: Collaborative Technical Challenge

// Step 1 —  
/*
— It needs to help us convert the percentage of a number to a decimal 
— And it will help a student calculate the area of a rectangle
— It will also help us convert a number from celsius to fahrenheit.

Step 2 — 

— First one will take one parameter
— Second will take two parameter
— Third one will take one parameter

Step 3 — 
—   To calculate percentage is parameter / 100
—   To calculate area of rectangle is parameter a * parameter b
—   To calculate  Fahrenheit is (parameter a * 1.8) + 32

Step 4 — 
Each function will return result of the calculations
And will display the result by calling the function

step 5 — 
we are using one arrow function for each senerio
*/
// Step 6 — 

{
  // Calculator for percentage: it returns a decimal value of a percentage
  const calPercentage = (num) => num / 100;
  console.log(calPercentage(25));  


 // Calculator to find the area of rectangle
  const areaOfRectangle = (l, w) => {
    console.log(l * w);
  }
  areaOfRectangle(4, 9);
 
  // Calculator to calculate  Fahrenheit
 const celsiusToFahrenheit = (num) =>(num * 1.8) + 32;
 console.log(`100 degree Celsius = ${celsiusToFahrenheit (100).toFixed(1)} Fahrenheit.`);

}

/*Step 7 Output
0.25
36
100 degree Celsius = 212.0 Fahrenheit.

*/