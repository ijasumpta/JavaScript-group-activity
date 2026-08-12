
//first fucntion that calculates a tip based on a bill price and tip percentage

function calculateTips (billPrice, tipPercent) {
    const tip = billPrice * tipPercent / 100;
    return tip;
}

// second function that displays a formatted final message

function displayMessage (billPrice, tip) {
    console.log(`For a bill price of ${billPrice}NGN with a tip percentage of ${tipPercent}%, Your tip amount is ${tip}NGN. `);
}

const billPrice = Number(prompt("Enter the bill price: "));
const tipPercent = Number(prompt("Enter the tip percentage: "));
const numberOfPeople = Number(prompt("Enter number of people"))
const tip = calculateTips(billPrice, tipPercent); 
displayMessage(billPrice, tip);




function CalculateSplitBillPerPerson(totalBill, numberOfPeople) {
    const amountPerPerson = totalBill / numberOfPeople;
    return amountPerPerson;
}




