const day = ["Mon","Tue","Wed"]
const weekend = ["Sat","Sun"]

// console.log(day.push(weekend));
// console.log(day);

const temp = day.concat(weekend)
// console.log(temp);
// console.log(day);

const newArr = [...day, ...weekend]
// console.log(newArr);

const nestedArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const flatArr = nestedArr.flat(Infinity)
// console.log(flatArr);
