function Addition(number1 = 0 , number2=0){        //function with parametres having default values
    return number1 + number2;
    console.log(number1 + number2) ;   //it will never execute because it is written after return statement 
}

console.log(Addition(1,2));   // calling function with arguments
console.log(Addition());  //default values will work because no arguments are passed

let result=Addition(10,20);
console.log(result); //we can store the value return by function into a variable 
  

function CalcPrice(product){
    totalAmount=product.qty*product.pricePerQty;
    console.log(`your product is successfully added to card please pay your bill 
                  Bill Amout := ${totalAmount}`)
}

let product={
     pname: "Soap",
     qty : 10,
     pricePerQty : 100
}
CalcPrice(product);
