//  1] declaring function in object 
let abc ={
    firstName :"Roshan",
    lastName  : "Chavan",
    age       : 24,
    phone     :"9637167368",
    email     :"chavan@123",
    greet     : function(){
                     console.log(`Hello ${this.firstName}`);
                     },
    printFullName  : function(){
                    console.log(`Hello ${this.firstName} ${this.lastName}`);
                    }

    
    }

    abc.greet();

    abc.printFullName();
