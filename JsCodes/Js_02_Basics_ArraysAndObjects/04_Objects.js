//singleton object 

let User = new Object();
User.name="Roshan Chavan";
console.log(`1 : ${User.name}`);
User.age=25;
console.log(`2 : ${User.age}`);

//Object Nesting 
let instaUser={
    Username:{
        firstName: "Roshan",
        lastname : "Chavan"
    },
    age:25
}
console.log(`3 : ${instaUser.Username.firstName}`);


//Object Merging 

let obj1={
       1:"One",
       2:"Two",
       3:"Three"
}
let obj2={
    4:"Four",
    5:"Five",
    6:"Six"
}
//Method1
/* 1) using Object.assign(SourceObj,targetObj) MEthod ,it returns new object containing all elements of source and target 
      first element will be treated as target and after all will be treated a ssoource best practice is to kepp source as {}  */

      let obj3=Object.assign({},obj1,obj2) //all will merge into targetobject{} then target will be returned and stored in obj3
      console.log(obj3)
//Method2
/*using spread operator */
let obj4={...obj1,...obj2} 
console.log(obj4);


//objects in array
let arrayOfObjects=[{
    id:1,
    name:"Roshani"
},{
    id:2,
    name:"Roshan"
},
{
    id:3,
    name:"Rosh"
}
];


console.log(Object.keys(obj1));
