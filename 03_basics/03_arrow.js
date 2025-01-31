const user ={
    user : "rohini",
    price: 100,

    welcomeMsg : function(){
        console.log(`welcom ${user.user}`)
    }
}

user.welcomeMsg();
user.user = "new"
user.welcomeMsg()