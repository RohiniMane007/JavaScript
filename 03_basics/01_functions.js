function  viewFun(){
    console.log("function");
}

// viewFun();

// function addNum(num1, num2){
//     console.log(num1+num2);
// }

// addNum() //NaN
// addNum(4,3) // 7
// addNum(4,"7") // 47
// addNum(4,"a") // 4a
// addNum(4,null) 

function addNum(num1, num2){
    let result = num1+num2

    return result;
}

const result = addNum(5,3)
// console.log(result);

function msgView(user='aaa'){
    if(!user){
        console.log("undefined");
        return
    }
    return `Hello ${user}`
}

// console.log(msgView('Rohini'))
// console.log(msgView('fe')) // 
// console.log(msgView()) //undefined

const user = {id:1,name:"aaaa"}

function viewObj(anyObject){
    return `my id is ${anyObject.id} and ${anyObject.name}`
}

// console.log(viewObj(user))
// console.log(viewObj({id:"rohi",name:"123"}))

const myArray = [20,30,40,50]

function getArray(arr){
    return arr[1];
}

// console.log(getArray(myArray));
console.log(getArray(["aa","ss","dd","ff"]));