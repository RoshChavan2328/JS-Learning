// Loop that iterates 11 times (from 0 to 10)
for (let index = 0; index <= 10; index++) {
    // console.log(index); // Uncomment to log each index value (0 to 10)
}

// Print multiplication tables from 1 to 10
for (let i = 1; i <= 10; i++) {
    // console.log(`\nTable of ${i} \n`); // Uncomment to print table header
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`); // Uncomment to print the multiplication result
    }
}

// Iterate over an array of names
let arr = ["Roshan", "Adesh", "Keshav", "Rushabh", "Piyush", "Harshal"];
for (let idx = 0; idx < arr.length; idx++) {
    // console.log(arr[idx]); // Uncomment to log each name in the array
}

// 'break' statement example - loop stops when index equals 5
for (let index = 0; index <= 10; index++) {
    if (index === 5) {
        break; // Breaks out of the loop when index is 5
    }
    console.log(index); // Logs 0 to 4, loop ends before logging 5
}

// 'continue' statement example - skips iteration when index equals 5
for (let index = 0; index <= 10; index++) {
    if (index === 5) {
        continue; // Skips the current iteration (5 will not be logged)
    }
    console.log(index); // Logs 0 to 10, except 5
}
