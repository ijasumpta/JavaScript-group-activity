
//Part 2: Predict the Output  Snippet A

let temperature = 15;
if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature > 15) {
    console.log("It's warm.");
} else {
    console.log("It's cool");    // will output It's cool.
}

// Snippet B

let age = 20;
let hasId = false;
if (age >= 18 && hasId) {
    console.log("You may enter") 
} else {
    console.log("Entry denied");  // will output Entry denied
}

// Snippet C

let password = "1234";
if (password === "0000") {
    console.log("Password changed!");
} else {
    console.log("No change.")    //  No changed.
}
