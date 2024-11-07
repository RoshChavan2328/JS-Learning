// this.name="Roshan Arun  Chavan";

// function printName1(){
//     name="Roshan";
//     console.log(this.name);
    
// }
// function printName2(){
//     name="Roshan Chavan";
//     console.log(this.name);
    
// }
// console.log("global"+this.name);
// printName1();
// printName2();

//----------------------------------------------------------------------------------------------------------------------------------------
  function SetUsername(username){
    this.username = username
    }
    function createUser(username,email,password){
    SetUsername.call(this,username)               //it holds the refference of the username even after execution of SetUsername function 
                                                  //also it is storing the username  in its own this 
    this.email= email
    this.password = password
}
    const chai = new createUser("chai", "chai@fb.com" ,123)
    console.log(chai);
    
    

 
    
   

     
