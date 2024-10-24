//singleton object =Object.create();  //

//object Literals

let student={
    firstName : "Roshan" ,
    lastName :"Chavan",
    phone: "1234567876",
    age : 24,
    email: "chavan.roshan@gmail.com",
    isqualified : true, 
    printvalue : function(){
    console.log(`Hello ${this.firstName}`);
    }
}

student.printvalue();
console.log(student["age"]); //Or
console.log(student.age);



