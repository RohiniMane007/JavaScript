//object literals
const sym = Symbol('key1')

const JsUser = {
    id : 1,
    [sym] : "myKey",
    uname : "aaa",
    email : "",
    isLoggedIn : true,
    "address val":"addr"

}


console.log(JsUser.id);
console.log(JsUser["address val"]);
console.log(JsUser["uname"]);

console.log(JsUser[sym]);