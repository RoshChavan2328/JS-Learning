
// Definition of filter method:
// The filter() method returns a new array with all elements that pass the test implemented by the provided function or expression.


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Method 1: Using filter to return even numbers (explicit return)
let evenNums = nums.filter((el) => {
    if (el % 2 === 0) {   // Check if the element is divisible by 2
        return el;        // If true, include it in the new array
    }
});

// Method 2: Using filter to return even numbers (implicit return)
let evenNums2 = nums.filter((el) => el % 2 === 0);  // No need for `if`, the condition directly returns true/false

// Book collection array
let books = [
    { title: "Book One", genre: "History", publish: 1986, edition: "First" },
    { title: "Book Two", genre: "Fiction", publish: 1989, edition: "Second" },
    { title: "Book Three", genre: "Non-Fiction", publish: 1981, edition: "Third" },
    { title: "Book Four", genre: "Science", publish: 2014, edition: "Fourth" },
    { title: "Book Five", genre: "Science", publish: 1996, edition: "Fifth" },
    { title: "Book Six", genre: "Science", publish: 2016, edition: "Sixth" },
    { title: "Book Seven", genre: "Fiction", publish: 1987, edition: "Seventh" },
    { title: "Book Eight", genre: "Non-Fiction", publish: 2011, edition: "Eighth" },
    { title: "Book Nine", genre: "Science", publish: 1987, edition: "Ninth" }
];

// Method 1: Filter books by genre "Science" (explicit for...in loop)
let scienceBooks = books.filter((el) => {
    for (let key in el) {          // Loop through each property in the object
        if (key === "genre" && el[key] === "Science") {  // Check if "genre" is "Science"
            return el;            // Return the book if it matches
        }
    }
});

// Method 2: Filter books by genre "Science" (direct property check)
let scienceBooks2 = books.filter((el) => el.genre === "Science");  // Simplified, directly checking the `genre` property

// Display result
console.log(scienceBooks2);
