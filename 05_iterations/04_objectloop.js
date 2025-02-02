const myObj = {'1':"aa",'2':"bb",'3':'cc','4':'dd','5':'ee'}

for (const key in myObj) {
   console.log(`${key} : ${myObj[key]}`);
   
}

const arr = ["a","b","c","d","e"]

for (const key in arr) {
//    console.log(key);
   console.log(`${key} : ${arr[key]}`);
   
}