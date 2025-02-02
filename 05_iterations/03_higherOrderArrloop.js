// for-of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "good morning"

for (const e of greeting) {
    // console.log(e);
}

// Maps

const map = new Map()
map.set("IN", "India")
map.set("FR", "France")
map.set("UK", "United Kingdom")
map.set("IN", "India")

console.log(map);

for (const [key,val] of map) {
    // console.log(key);
    // console.log(val); 
}

const myObj = {'1':"aa",'2':"bb"}

// for (const e of myObj) {
//     console.log(e);
// }