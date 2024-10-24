let arrayOfNumbers=[1,2,3,4,5];  //array of integers 
let arrayOfStrings=["ROshan","Chavan"];  //array of strings

let arrayOfArrays=[];

arrayOfArrays.push(arrayOfNumbers,arrayOfStrings);   //in js arrays can contains another arrays 

console.log(arrayOfArrays);   
console.log(arrayOfArrays[0][1]); 

let arraymanipulation=[];
let concatedArray = arraymanipulation.concat(arrayOfStrings,arrayOfNumbers); //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(concatedArray); 


let concatedArrayUsingSpread =[...arrayOfStrings,...arrayOfNumbers]; //Combines two or more arrays(...using spread operator).
                                                                     // This method returns a new array without modifying any existing arrays.
console.log(concatedArrayUsingSpread);

let innerArrays=[1,[2,3],4,[5,[6,7],8],9];
let subElements=innerArrays.flat(Infinity); /* it returns a new array with all elements of sub array it takes depth as a parameter
                                        depth can also be infinity or in numbers  */
console.log(subElements);


let name="Roshan";
console.log(Array.from(name));     //Creates an array from an iterable object.

let x=10;
let y=20;
let z=30;

console.log(Array.of(x,y,z));  //Returns a new array from a set of elements. 

console.log(Array.isArray(innerArrays)); //returns boolean based on arguments



