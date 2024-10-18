let date= new Date();   // MM/DD/YYYY

console.log(date.toString());
console.log(date.toDateString());            //Output=Mon Dec 23 2024
console.log(date.toLocaleString("en-In"));   //Output=23/12/2024, 12:00:00 am
console.log(typeof(date));


let myCreatedDate= new Date("12/23/2024");   // MM/DD/YYYY
console.log(myCreatedDate.toDateString()); 

let myCreatedDate2= new Date(2000,0,8);   // YYYY//MM/DD
console.log(myCreatedDate2.toDateString()); 

console.log(myCreatedDate2.getMonth());   //months starts from 0 in js ;0=jan 
console.log(myCreatedDate2.getDay() + 1 );
console.log(myCreatedDate2.getTime());    //time in ms




let timestamp = Date.now();
console.log(timestamp);    //time in ms 



