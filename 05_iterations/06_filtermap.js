const arrNum =[1,2,3,4,5,6,7,8,9,10]

const newNum = []
// newNum = arrNum.filter((n)=> n>4);

// console.log(newNum);

arrNum.forEach((n)=>{
    if(n>4){
        // newNum.push(n);
    }
})

// console.log(newNum);

const books = [
    {
        title: 'book one',
        genre: 'science',
        publish: 1992,
        edition: 2001
    },
    {
        title: 'book two',
        genre: 'history',
        publish: 1995,
        edition: 2003
    },
    {
        title: 'book three',
        genre: 'fiction',
        publish: 1982,
        edition: 1997
    },
    {
        title: 'book four',
        genre: 'non-fiction',
        publish: 1982,
        edition: 1997
    },
    {
        title: 'book five',
        genre: 'history',
        publish: 1993,
        edition: 2002
    },
]

let newbook = books.filter((b)=> b.genre == 'history')

newbook = books.filter((b)=> {return b.edition >= 2000})

console.log(newbook);
