const language = ['c','c++','java','dart','python']

language.forEach(function (val) {
    // console.log(val);
});

language.forEach(element => {
    // console.log(element);
});

function print(item) {
    // console.log(item);
    
}
language.forEach(print)

const arrObj = [
    {
        id:"1",
        name:"jack"
    },
    {
        id:"2",
        name:"jay"
    },
    {
        id:"3",
        name:"niki"
    },
    {
        id:"4",
        name:"sam"
    },
]

arrObj.forEach(item => console.log(`${item.id} : ${item.name}`)
)