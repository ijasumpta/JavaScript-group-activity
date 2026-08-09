const age=Number(prompt("Enter age:"));
const day=prompt("weekday or weekend?").trim().toLowerCase();
let price;
if(age<13){price=5;}
else if(age<18){price=8;}
else if(age<65){price=12;}
else{price=6;}
if(day==="weekday"){price-=2;}
alert(`Ticket Price: $NGN{price}`);

