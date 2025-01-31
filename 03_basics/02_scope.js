var a = 11
let c = 300
if (true) {
    var a = 10
    const b = 20
    let c = 30

    // console.log("inner:" , c);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const user = "rohini"

    function two(){
        const id = "1111"
        console.log(user);
        console.log(id);
    }

    // console.log(id)
    two()
}
// one()

if(true){
    const user = "aaaa"
    if(user ==="aaaa"){
        const id = "111"

        // console.log(user + id);
    }

    // console.log(id);
}
// console.log(user);

//==================================================//

function add(num){
    return num+1
}

add(5)
console.log(add(5));

const addtwo = function(num){
    return num +2
}

// addtwo(7)

// console.log(addtwo(7))