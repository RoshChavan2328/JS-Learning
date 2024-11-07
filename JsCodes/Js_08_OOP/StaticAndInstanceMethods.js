class User{
    constructor(username,id,password){
        this.username= username;
        this.id=id;
        this.password=password;
    }
        instanceMethod(){
        console.log(`Hello ${this.username}`);
        console.log(`Your Id is       : ${tempUser.id}`);
        console.log(`Your Password is : ${tempUser.password}`);
      }
static staticMethod(){
    console.log(`Hello i'm static method`);

      }
}

const tempUser= new User("Roshan",2328,"Roshan@0000");

tempUser.instanceMethod();
User.staticMethod();
