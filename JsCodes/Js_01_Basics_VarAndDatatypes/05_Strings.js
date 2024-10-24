let str1= "roshan";      //in js Strings are immutable 
let str2=" Chavan";
str2 = str2.toUpperCase();    //it created new string and then assigned it to str2
console.log(str2);
str2 = str2.toLowerCase(); 
console.log(str2);

console.log(str1.charAt(0));       //output= r                    //it prints the character at given index 
console.log(str1.indexOf("h"));    //output= 2                    //it prints the index of given character 
console.log(str1.concat(str2));    //output=roshan CHAVAN         //it will concat Two Strings
console.log(str1.slice(0,4));      //output=rosh                  // it will return substring from idx 0 to 4, character at end index will not gets included
console.log(str1.includes("rosh"));//output=true                  //it will return true if original string includes given string     
console.log(str1.length);         //output=6                      //it will return the length of string
console.log(str1.replace("r","p")); //output=poshan               //it will replace the existing character with given character

let string12= new String("Roshan Chavan");                       //create string using String object 
console.log(string12);
