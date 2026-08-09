//Decision Makers 
// explanation of decisions, conditionals and logical operators.

//Group Discussion
//1. A decision means choosing a path based on a condition. Example: If it rains, take an umbrella; otherwise don't.

//2. = assigns a value. == compares values with type conversion. === compares both value and type and is safest.

//3. In an if/else if/else chain, only the first true block runs.

//4. && means BOTH conditions are true. || means either condition can be true.



//Movie Ticket Pricer
//Rules:
//Child <13 = $5
//Teen 13-17 = $8
//Adult 18-64 = $12
//Senior 65+ = $6
//Weekday discount = -$2


const age=Number(prompt("Enter age:"));
const day=prompt("weekday or weekend?").trim().toLowerCase();
let price;
if(age<13){price=5;}
else if(age<18){price=8;}
else if(age<65){price=12;}
else{price=6;}
if(day==="weekday"){price-=2;}
alert(`Ticket Price: $NGN{price}`);

