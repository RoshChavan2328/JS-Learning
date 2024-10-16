let num1 = 1945.867;    // Dynamic declaration of a number
let num2 = new Number(200.232);  // Creating a number using Number object (not typically recommended in modern JS)

console.log(num1);   // Outputs: 1945.867
console.log(num2);   // Outputs: [Number: 200.232], because it's an instance of the Number object

console.log(num1.toString());  // Converts num1 (number) to a string, Outputs: "1945.867"
console.log(num1.toLocaleString('en-IN'));  // Converts num1 to a comma-separated format based on Indian numbering system, Outputs: "1,945.867"

// Methods of the Math library

console.log(Math.floor(4.9));   // Rounds down to the nearest integer, Outputs: 4
console.log(Math.ceil(4.9));    // Rounds up to the nearest integer, Outputs: 5
console.log(Math.random());     // Generates a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.round(4.9));   // Rounds to the nearest integer, Outputs: 5
console.log(Math.round(4.3));   // Rounds to the nearest integer, Outputs: 4
console.log(Math.pow(4, 2));    // Calculates 4 raised to the power of 2, Outputs: 16
