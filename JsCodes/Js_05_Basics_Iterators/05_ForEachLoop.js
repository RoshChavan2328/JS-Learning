// Array of cities in Maharashtra
let citiesInMaharashtra = [
    "Mumbai", "Pune", "Nagpur", "Nashik", "SambhajiNagar", "Thane", 
    "Amravati", "Malegaon", "Jalgaon", "Dhule", "Ahmednagar"
];

// Using forEach with a standard function to iterate through the array
//forEach does not return anything 
citiesInMaharashtra.forEach(function (el) {
    // el represents each element in the array
    // console.log(el);  // Uncomment this to print each city
});

// Using forEach with an arrow function (shorter syntax)
citiesInMaharashtra.forEach((el) => {
    // el represents each element in the array
    // console.log(el);  // Uncomment this to print each city
});

// Custom function to print array element, its index, and the entire array
function printArray(el, idx, array) {
    console.log(el);    // Prints the current element (city)
    console.log(idx);   // Prints the index of the current element
    console.log(array); // Prints the entire array
}

// Using forEach with a custom function to print detailed info
citiesInMaharashtra.forEach(printArray);  // Calls printArray for each city in the array


// Array of objects representing coding activity tracking
let CodingTracking = [
    {
        Day: 1,
        Language: "Java",
        Time: "3hr"
    },
    {
        Day: 2,
        Language: "Apex",
        Time: "5hr"
    },
    {
        Day: 3,
        Language: "Python",
        Time: "4hr"
    },
];

// Iterating through the CodingTracking array using forEach and arrow function
CodingTracking.forEach((el) => {


    // Use for...in loop to access each key-value pair
    for (let key in el) {
        console.log(`${key}: ${el[key]}`);  // Prints the key and value separated by ':'
    }
    console.log('---'); // Adds a separator after each object for better readability
    
});
