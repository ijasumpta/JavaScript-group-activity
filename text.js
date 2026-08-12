


//Movie Ticket Pricer
//Rules:
//Child <13 = $5
//Teen 13-17 = $8
//Adult 18-64 = $12
//Senior 65+ = $6
//Weekday discount = -$2


// const age=Number(prompt("Enter age:"));
// const day=prompt("weekday or weekend?").trim().toLowerCase();
// let price;
// if(age<13){price=5;}
// else if(age<18){price=8;}
// else if(age<65){price=12;}
// else{price=6;}
// if(day==="weekday"){price-=2;}
// console.log(`Ticket Price: ${price}NGN`);

// function calculateTips (billPrice, tipPercent) {
//     const tip = billPrice * tipPercent / 100;
//     return tip;
// }

// function displayMessage (billPrice, tip) {
//     console.log(`For a bill price of ${billPrice}NGN with a tip percentage of ${tipPercent}%, Your tip amount is ${tip}NGN. `);

// }

// const billPrice = Number(prompt("Enter the bill price: "));
// const tipPercent = Number(prompt("Enter the tip percentage: "));
// const tip = calculateTips(billPrice, tipPercent); 
// displayMessage(billPrice, tip);

// let billPrice = 10000;
// let tipPercent = 10;

// let tip = calculateTips(billPrice, tipPercent);


// function calculateTip(billAmount, tipPercentage){
//     return billAmount * (tipPercentage / 100);
// }

// //Function that displays a formatted final message
// function displayFinalMessage(billAmount, tipPercentage, tipAmount){
//     console.log(`For a bill amount of $${billAmount} with a tip percentage of ${tipPercentage}%, the tip amount is $${tipAmount.toFixed(2)}.`);
// } // .tofixed(2) is used to round the tip amount to two decimal places for better readability

// //Main program
// const billAmount = Number(prompt("Enter the bill amount: "));
// const tipPercentage = Number(prompt("Enter the tip percentage: ")); 
// const tipAmount = calculateTip(billAmount, tipPercentage);
// displayFinalMessage(billAmount, tipPercentage, tipAmount);


// function CalculateSplitBillPerPerson(billPrice, numberOfPeople) {
//     const amountPerPerson = billPrice / numberOfPeople;
//     return amountPerPerson;
// }

// const billPrice = Number(prompt("Enter the bill price: "));
// const tipPercent = Number(prompt("Enter the tip percentage: "));
// const numberOfPeople= Number(prompt("Enter the number of people"));
// // const tip = calculateTips(billPrice, tipPercent); 

// const amountPerPerson = CalculateSplitBillPerPerson(totalBill, numberOfPeople);
//  function displayMessage(billPrice, tip){
//       console.log(`For a bill price of ${billPrice}NGN with a tip percentage of ${tipPercent}%, Your tip amount is ${tip}NGN. Your total bill is ${totalBill}NGN and each person will pay ${amountPerPerson}NGN  `);
//  }




// function calculateTips (billPrice, tipPercent) {
//     const tip = billPrice * tipPercent / 100;
//     return tip;
// }

// // second function that displays a formatted final message

// function displayMessage (billPrice, tip) {
//     console.log(`For a bill price of ${billPrice}NGN with a tip percentage of ${tipPercent}%, Your tip amount is ${tip}NGN. `);

// }



// function CalculateSplitBillPerPerson(totalBill, numberOfPeople) {
//     const amountPerPerson = totalBill / numberOfPeople;
//     return amountPerPerson;


// }

// const billPrice = Number(prompt("Enter the bill price: "));
// const tipPercent = Number(prompt("Enter the tip percentage: "));
// const numberOfPeople = Number(prompt("Enter number of people"))
// const tip = calculateTips(billPrice, tipPercent); 
// const totalBill = billPrice + tip;
// const amountPerPerson = CalculateSplitBillPerPerson(totalBill, numberOfPeople);
// displayMessage(billPrice, tip);

//  console.log(`The total bill is ${totalBill}NGN, Each person will pay ${amountPerPerson}NGN`);


//Part 5: Extension Challenge


function calculateTips (billPrice, tipPercent) {
    const tip = billPrice * tipPercent / 100;
    return tip;
}

// second function that displays a formatted final message

function displayMessage (billPrice, tip) {
    console.log(`For a bill price of ${billPrice}NGN with a tip percentage of ${tipPercent}%, Your tip amount is ${tip}NGN. `);

}


 // Third function that calculates the total bill split evenly between a given number of people

function CalculateSplitBillPerPerson(totalBill, numberOfPeople) {
    const amountPerPerson = totalBill / numberOfPeople;
    return amountPerPerson;


}

const billPrice = Number(prompt("Enter the bill price: "));
const tipPercent = Number(prompt("Enter the tip percentage: "));
const numberOfPeople = Number(prompt("Enter number of people"))
const tip = calculateTips(billPrice, tipPercent); 
const totalBill = billPrice + tip;
const amountPerPerson = CalculateSplitBillPerPerson(totalBill, numberOfPeople);
displayMessage(billPrice, tip);

 console.log(`Your total bill is ${totalBill}NGN, And each person will pay ${amountPerPerson}NGN`);

