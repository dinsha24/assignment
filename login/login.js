class user{
    constructor(id,name){
        this.id=id;
        this.name=name;  
    }
    login(){
        console.log(this.id,'logged in');
        
    }
    logout(){
        console.log(this.id,'logged out');
    }
}
    var user1= new user(1,'dinsha');
    var user2= new user(2,'akshita');
    user1.login().logout().login();
    user2.logout().login();


