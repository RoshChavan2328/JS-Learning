// 'while' loop example - prints numbers from 1 to 5
let count = 1;
while (count <= 5) {
    //console.log(count);  // Logs current count value
    count++;             // Increments count by 1 after each iteration
}
// The loop continues as long as 'count' is less than or equal to 5


// 'do...while' loop example - prints numbers from 1 to 5
let number = 1;
do {
    //console.log(number);  // Logs current number value
    number++;             // Increments number by 1 after each iteration
} while (number <= 5);    // The condition is checked after each iteration
// The code inside the loop will run at least once, even if the condition is false initially



// 'while' loop example - this loop would be infinite without the 'break' statement
let idx = 0;
while (true) {
   // console.log(idx);    // Logs the value of 'idx'
    idx++;               // Increments 'idx' by 1 after each iteration
    
    if (idx === 10) {    // Breaks the loop when 'idx' reaches 10
        break;           // Stops the loop
    }
}
// Without 'break', this would result in an infinite loop




// 'do...while' loop example - ensures the loop runs at least once even if the condition is false
let start = 10;
do {
    //console.log(start);  // Logs the value of 'start' (will run at least once)
    start++;
} while (start < 5);    // The condition is false, but the loop runs once before checking it

