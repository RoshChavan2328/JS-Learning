class User{
    constructor(username){
        this.username= username;
    }
}
class UserDetails extends User{
    constructor(username,id,password){
        super(username);
        this.id=id;
        this.password=password;

    }   
    printDetails(){
        console.log(`Hello ${this.username}`);
        console.log(`Your Id is       : ${this.id}`);
        console.log(`Your Password is : ${this.password}`);


    }
}

let tempuser = new UserDetails("Roshan","2328","Roshan@Chavan");
tempuser.printDetails();
