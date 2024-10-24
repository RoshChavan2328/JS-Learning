//declaring symbol to use as a string in object 
let symbol1=Symbol("symbolKey");
//object Literals  
//object Declaration  
////let student={} 
let student={
    firstName : "Roshan" ,
    lastName :"Chavan",
    phone: "1234567876",
    age : 24,
    email: "chavan.roshan@gmail.com",
    isqualified : true, 
    [symbol1]:"symbolvalueOverride",     //using symbol as a key 
    printvalue : function(){              //functions in objects 
    console.log(`Hello ${this.firstName}`);
    }
}

//Methods of accessing object values using object keys
console.log(student["age"]); //
console.log(student.age);

//defining and method of accessing object function  
student.printsum=function(){     //second way of defining function in object 
  console.log(`Hello ${this.firstName} ${this.lastName}`);
};
student.printvalue();                //objname.funname();
student.printsum();  

//changing values of keys 
student.age=25;

Object.freeze(student);  //now no one can edit this object 
console.log(student);





