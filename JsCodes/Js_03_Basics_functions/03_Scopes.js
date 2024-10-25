var a=10;        // global scope variable can be redeclare and reassign 
let b=20;        //block scope variable cannot be redeclared in same scope but can reassign 
const c=30;     //block scope ariable cannot redeclared in same scope  and cant reassign 

if(true){
    var a=40;      //redeclared in different scope but it is global scope var so it will override its existing value         
    let b=50;     //redeclared in different scope      
    const c=60;   //redeclared in different scope  
    console.log(a);
    console.log(b);
    console.log(c);

}
console.log(a);
console.log(b);
console.log(c);


function outerFunction(){
    let firstName="Roshan";
    let lastName="Chavan";
    function innerFunction(){
        let nickName="Rosh";   //it cannot be accesible in outer function
        console.log(`Hello! \n${firstName} ${lastName} \nim getting your name from Outer function`);  
       
    }
    //console.log(nickName);   nickname is not accessible here
   
    innerFunction();    //inner function can only be called inside the outer function because its scope is limited in them 
 
}
outerFunction();



