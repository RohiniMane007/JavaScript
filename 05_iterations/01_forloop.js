

for (let index = 0; index < 10; index++) {
    const element = index;
    if (index == 5) {

        // console.log("number 5");
    }
    // console.log(index);

}

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
            // console.log(`number ${i}: ${i*j}`);
    }
}

let myArray = ["apple","kivi", "orange", "grapes"]

for (let k = 0; k < myArray.length; k++) {
    // const element = array[k];
    // console.log(myArray[k]);
    
}

//break and continue

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        // console.log(`number 5 detected`);
        break;
    }
    // console.log(`value of i : ${i}`);
    
}

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log(`number 5 detected`);
        continue;
    }
    console.log(`value of i : ${i}`);
    
}