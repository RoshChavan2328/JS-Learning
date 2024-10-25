let arrowFun = (a,b) => 
    a+b;       //it implicitly returns value and inclosed in parantheses 
console.log(arrowFun(1,2));

let arrowFun2 = () =>     //we have to  explicitly return value and it inclosed in braces 
   { 
     return "Hello";
   } 

console.log(arrowFun2());
