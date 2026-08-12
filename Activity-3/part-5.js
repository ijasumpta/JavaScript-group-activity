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