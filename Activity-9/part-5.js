
// Part 5: Extension Challenge

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

// Part 5: Extension Challenge
// Converting Fahrenheit back to Celcius

const FahrenheitToCelsius = (num) => (num - 32) * 0.5555;
console.log(`212 Fahrenheit = ${FahrenheitToCelsius (212).toFixed(1)} Celsius.`);