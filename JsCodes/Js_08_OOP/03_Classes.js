class User{
    constructor(username,id,password){
        this.username= username;
        this.id=id;
        this.password=password;
    }
    printDetails(){
        console.log(`Hello ${this.username}`);
        console.log(`Your Id is       : ${this.id}`);
        console.log(`Your Password is : ${this.password}`);


    }
}

const tempUser= new User("Roshan",2328,"Roshan@0000");

tempUser.printDetails();
