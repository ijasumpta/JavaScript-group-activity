// Part 1: Group Discussion

/*
1. Prompt returning a string could cause a bug because if a program expect a number bug got a string, it may not be able to properly perfom mathematical operation on it accurately. This can be fixed by converting the string data type to number using Number() method

2. (i) Number() convert a string number value to a number datatype

we use number() when we want the program to return the number datatype

(ii) while parseint() converts a string number value to a number data type  returning only the interger part

We use parseint() only when we want the program to return only the integer part   (the whole number)

(iii) Parsefloat() convert a string decimal value to a number datatype returning the floating number

We use parsefloat when we want the program to return the floating number

3. It does not change the original variable. Instead, it returns a new value in uppercase.

Example:
*/
let myName = "ijeoma";
console.log(myName.toUpperCase()); // IJEOMA

console.log(myName); // ijeoma

// 4. A program checks the length of a user's input to ensure it meets the required number of characters. For example, a password must have a minimum number of characters, while an essay response should not exceed the maximum number of characters.

// 5. A real world scenario would be when asking users for price of an item using prompt