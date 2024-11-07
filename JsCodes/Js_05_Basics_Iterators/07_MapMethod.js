// Definition of map method:
// The map() method creates a new array by applying a function to each element in the original array.
// It does not change the original array but returns a new transformed array.


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Simple map function: adds 10 to each element in the array
let newArray = nums.map((el) => el + 10);
console.log(newArray);  // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Chaining multiple operations using map and filter
let newArray2 = nums
    .map((el) => el * 10)        // Multiply each element by 10
    .map((el) => el + 1)         // Add 1 to each result
    .filter((el) => el > 50);    // Filter out elements greater than 50
console.log(newArray2);  // Output: [ 51, 61, 71, 81, 91, 101 ]
