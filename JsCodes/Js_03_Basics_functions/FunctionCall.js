function SetUsername(username){
    this.username = username
    console.log(username);
    }


    function createUser(username,email,password){
    SetUsername(username)                             // calling another function       
    this.email= email
    this.password = password
    console.log(email);
    console.log(password);
}
    createUser("chai", "chai@fb.com" ,123)
    