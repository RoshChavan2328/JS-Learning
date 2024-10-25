// Control Flow Statements in JavaScript

// 1. if-else statement
// Used to execute code blocks based on a condition
let temperature = 25;
if (temperature > 30) {
    console.log("It's hot outside."); // Executes if condition is true
} else {
    console.log("It's a pleasant day."); // Executes if condition is false
}

// 2. if-else if-else statement
// Allows for multiple conditions to be checked
let score = 85;
if (score >= 90) {
    console.log("Grade: A"); // Runs if score is 90 or above
} else if (score >= 80) {
    console.log("Grade: B"); // Runs if score is 80 or above
} else {
    console.log("Grade: C"); // Runs if none of the above conditions are true
}

// 3. switch statement
// Used to execute different code based on the value of an expression
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break; // Ends the case block
    case "Wednesday":
        console.log("Midweek!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Regular day."); // Executes if no case matches
        break;
}

// 4. Ternary operator (shorthand for if-else)
// Evaluates a condition and returns one of two values
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote." : "No, cannot vote.";
console.log(canVote); // Output: Yes, can vote.

/* falsy values =  0,-0,false,Nan,Null,undefine,Bigint 0n,""   */
//tricky truthy values = "0","false",[],{},"  "

if("0"){
   console.log("True");
}