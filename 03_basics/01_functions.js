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
console.log(result);

function msgView(user){
    return `Hello ${user}`
}

console.log(msgView('Rohini'))