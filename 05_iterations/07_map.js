const myNum = [1,2,3,4,5,6,7,8,9,10]

// let newnum =  myNum.map((n)=>n+10)
// console.log(newnum);

let newnum =  myNum
                .map((n)=>n*10)
                .map((n)=>n+1)
                .filter((n)=> n>=40)
console.log(newnum);