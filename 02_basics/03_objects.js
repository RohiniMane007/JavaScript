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


// console.log(JsUser);

// console.log(JsUser.id);
// console.log(JsUser["address val"]);
// console.log(JsUser["uname"]);

// console.log(JsUser[sym]);
// console.log(typeof JsUser[sym]);

// Object.freeze(JsUser)

JsUser.email = "ggg";

// console.log(JsUser["email"]);

JsUser.greeting = function () {
    console.log("hello")
}

console.log(JsUser.greeting);