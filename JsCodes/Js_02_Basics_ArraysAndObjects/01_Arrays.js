//JavaScript arrays are resizable and can contain a mix of different data types.
//indexing of arrays atarts from 0   to the length-1

//declaration of arrays in js 

let arrayOfNumbers=[1,2,3,4,5];  //array of integers 
let arrayOfStrings=["ROshan","Chavan"];  //array of strings
let mixArray=[1,2,3,"ROshan","Chavan",true,false];  //array with elements of different dataTypes(number,string,boolean)
let arrayUsingObject= new Array(1,2,3,4);


//Array Methods 
let arraymanipulation=[1,2,3,4];
arraymanipulation.push(0,5);    //adding elements at end (append)
console.log(arraymanipulation); 
arraymanipulation.pop();    //removing element from last 
console.log(arraymanipulation);  
arraymanipulation.unshift(0);      //adding element to start
console.log(arraymanipulation); 
arraymanipulation.shift();      //removing first element of an array
console.log(arraymanipulation); 
console.log(arraymanipulation.indexOf(1));  //it will return the index of given number in array
console.log(arraymanipulation.includes(1));  //it will return boolean value based on the  given numbers presence in the array
console.log(arraymanipulation[1]);           //it will return the element of an array from given index 
console.log(arraymanipulation.toString());   // converts the array elements into a single string with coma separated values   

console.log(arraymanipulation.slice(0,4));  /* it will not change existing but return a piece of given array with starting and ending
                                               index , ending index will be excluded */        
console.log(arraymanipulation.splice(0,4,1,1,1,1));  /* it wil change existing array ,it can be use to remove,replace elemnets 
                                                      of an array and last index will be included */ 
console.log(arraymanipulation);




  

