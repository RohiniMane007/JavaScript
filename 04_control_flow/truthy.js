const data = ""
if (data) {
    console.log("true");
    
} else {
    console.log("false");
    
}

const data2 = []
if (data2) {
    // console.log("true");
    
} else {
    // console.log("false");
    
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value

// "0",'false', " ", [], {}, function(){}


const obj = {}

if(Object.keys(obj).length == 0){
    console.log("empty");
    
}

//nullish coalescing operator (??): null undefined

let val;
// val = 5 ?? 10;
// val = null ?? 10;
// val = undefined ?? 15;
val = null ?? 10 ?? 20;
console.log(val);

// Terniary Operator
//condition : true ? false

const value = 60;
value <= 50 ? console.log("true val") : console.log("false val");


