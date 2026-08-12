// ******** Part 3:Debugging Challenge *********
// 1 
/*
 let firstName = "Tunde";
 let lastName = "Okafor";
 let fullName = firstName + " "  lastName;  //First error no + sign before lastName
 console.log("Welcome, " + fullname + "!");  // second error the fullname in the console is not declared
*/ 
// corrected version
   let firstName = "Tunde";
   let lastName = "Okafor";
   let fullName = firstName + " " + lastName; 
   console.log("Welcome, " + fullName + "!"); // Welcome, Tunde Okafor !
