/* Primitive datatypes*/

let name="Roshan";        //String
let age=24;               //Number
let isGraduated=true;     //Boolean
let address;              //undefined
let adharNo=null;        //Null   //type=object
                         //BigInt
                         //symbol

console.table([name,age,isGraduated,address,adharNo],[typeof(name),typeof(age),typeof(isGraduated),typeof(address),typeof(adharNo)]);
console.table([
    { Property: "Name", Value: name, Type: typeof(name) },
    { Property: "Age", Value: age, Type: typeof age },
    { Property: "Is Graduated", Value: isGraduated, Type: typeof(isGraduated) },
    { Property: "Address", Value: address, Type: typeof(address) },
    { Property: "Adhar No", Value: adharNo, Type: typeof(adharNo) }
  ]);

 

  /*Non Primitive datatypes  */
  //objects ,arrays
