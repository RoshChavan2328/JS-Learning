// Example 1: Using 'for...of' with an array
let arr1 = [1, 2, 3, 4, 5]; // Array of numbers

// Iterating over each value in the array using 'for...of'
for (let val of arr1) {
    console.log(val); // Logs each value in 'arr1' (1, 2, 3, 4, 5)
}
// 'for...of' is ideal for arrays when you only need the values, 
// without worrying about the index (cleaner and more readable than a traditional for-loop).

// Example 2: Using 'for...of' with a Map
let mapOfCountries = new Map();
mapOfCountries.set("ind", "India");
mapOfCountries.set("usa", "United States Of America");
mapOfCountries.set("uk", "United Kingdom");

// Iterating over the Map object using 'for...of'
for (let [key, value] of mapOfCountries) {
    console.log(`${key} : ${value}`); // Logs key-value pairs like 'ind: India'
}
// 'for...of' is perfect for Maps because it returns key-value pairs.
// It's especially useful when you need to access both the key and the value at the same time.


// Where to use 'for...of' and why:

// 1. Arrays: You can use 'for...of' to iterate over the values directly in an array
//    - Cleaner and more readable when you only need the values (not the indices).
//    - Example: Iterating through a list of numbers like in 'arr1' above.
//    - Alternatives: A traditional for-loop could also work, but 'for...of' removes the need to manage indices.

// 2. Maps: 'for...of' allows you to iterate over key-value pairs in a Map
//    - Destructures keys and values directly, making it very useful for handling both at the same time.
//    - Example: Working with 'mapOfCountries' where you need both country codes (keys) and country names (values).
//    - Alternatives: You could use `map.entries()` with other loop structures, but 'for...of' is much more readable.


// Key Points:
// - 'for...of' loops are great for iterating over iterable objects like arrays, strings, Maps, and Sets.
// - It simplifies working with the values directly, and in the case of Maps, it can easily destructure key-value pairs.




/* Summary of Iterables for for...of:
Arrays
Maps
Sets
Strings
NodeLists
Generator Objects
*/