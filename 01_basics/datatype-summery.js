// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const isloggedIn = false
const val = 3
let name;

const id = Symbol("123")
const newId = Symbol(123);

console.table([id, newId]);
console.table([typeof id, typeof newId]);

console.log(id === newId);

const bigNumber =  343543n

console.log(typeof bigNumber);

//===============================//
// Reference Type (Non primitive)
// Array, Objects, Functions

const days = ["mon", "tues", "wed", "thu", "fri", "sat"];

let obj ={"id":1,"name":"aaa"};

const myFun = function(){

}

console.log(typeof days);
console.log(typeof obj);
console.log(typeof myFun);

