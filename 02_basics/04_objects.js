const temp = new Object()

temp.id = 1
temp.name = "dddd"
temp.contact = "asd"


// console.log(temp);

const user = {
    id: "asd",
    fullname: {
        firstname: "ggggg",
        lastname: "hhhhh"
    }
}

// console.log(user);
// console.log(user.fullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = {obj1 , obj2};
// console.log(obj3);

// const obj3 = Object.assign({},obj1 , obj2);
// console.log(obj3);

const obj3 = {...obj1,...obj2};
// console.log(obj3);


// console.log(Object.keys(temp));
// console.log(Object.values(temp));
// console.log(Object.entries(temp));

const course = {
    coursename : "javascript",
    price : 1000,
    instructor: "code"
}

// const {instructor} = course
const {instructor: ins} = course
// console.log(course.instructor);
console.log(ins);
// console.log(instructor);

