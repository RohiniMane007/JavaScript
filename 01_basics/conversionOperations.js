
//******Conversions ************/
let score = "40"

console.log(typeof score);

let valInt = Number(score) 

console.log(valInt);
console.log(typeof valInt);

let isBool = Boolean(valInt)
console.log(typeof isBool);
console.log(isBool);


let strNum = String(valInt); 
console.log(typeof strNum)

//************Operations *********/

let val = 9

let negVal = -val
console.log(negVal);

// console.log(2+2);
// console.log(4-2);
// console.log(4*2);
// console.log(4/2);
// console.log(5%2);

let str1 = "He"
let str2 = "Hi"

let str3 = str1+str2

console.log(str3);
console.log(true + true);
console.log(false + false);

console.log("1"+1);
console.log(1+"1"+1);

console.log(1+4*1/2);
console.log(+true);
console.log(+"");
console.log(+false);
// console.log();
let counter = 10
++counter;
// counter++;
console.log(counter);