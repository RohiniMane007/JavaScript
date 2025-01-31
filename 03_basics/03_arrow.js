const user ={
    user : "rohini",
    price: 100,

    welcomeMsg : function(){
        // console.log(`welcom ${this.user}`)
    }
}

user.welcomeMsg();
user.user = "new"
user.welcomeMsg()

// console.log(this);
// function fun(){
//     let username = 'ggggggg'
//     console.log(username);
// }

// fun()


// const fun =  ()=>{
//     let username = 'ggggggg'
//     console.log(this);
// }

// fun()

// const sum = (num1,num2) => {
//     return num1+num2
// }

// const sum = (num1,num2) =>  num1+num2
const sum = (num1,num2) =>  (num1+num2)


console.log(sum(2,7));