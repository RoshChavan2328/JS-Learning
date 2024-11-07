// Definition of the reduce method:
// The reduce() method executes a reducer function (provided by you) on each element of the array,
// resulting in a single output value. It accumulates the results of the array elements 
// based on the logic defined in the reducer function.
// Syntax: array.reduce((accumulator, currentValue) => { /* logic */ }, initialValue);

let nums = [1, 2, 3, 4];

// Using reduce to calculate the sum of all elements in the array
let sumOfArray = nums.reduce((acc, curr) => acc + curr, 0); // Initial value of acc is 0
// console.log(sumOfArray); // Uncomment to see the sum: Output: 10

// Using reduce to calculate the product of all elements in the array
let productOfArray = nums.reduce((acc, curr) => acc * curr);
// console.log(productOfArray); // Uncomment to see the product: Output: 24

// Array of items with their names and prices
let items = [
    { itemName: "py", price: 100 },
    { itemName: "course", price: 200 },
    { itemName: "laptop", price: 500 },
    { itemName: "keyboard", price: 200 }
];

// Using reduce to calculate the total price of all items
let totalPrice = items.reduce((acc, curr) => acc + curr.price, 0); // Initial value of acc is 0
console.log(totalPrice); // Output: 1000
