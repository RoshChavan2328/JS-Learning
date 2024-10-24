//Object Destructuring 
let person = {
    name: "John",
    age: 30,
    city: "New York"
  };

  // Destructuring the object
/* Destructuring is a convenient way in JavaScript to extract values from objects (or arrays) and assign them to variables 
   so we cann call them directly using variable name rather than using object.variablename */
let {name : firstname,age,city}=person;
console.log(firstname);
