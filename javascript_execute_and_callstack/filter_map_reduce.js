const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
console.log(item);
 return item
} )

 console.log(values);

 //ya opper wala sara hissa mean for each()return nai kerta khuch just print kerta ha


 const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)//yaha callback function laga
console.log(newNums);
//ya filter ha iss ma value return hutti ha

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })//ager ham ya wala tareeq use kery mtlb curly brackets wala{} phr return likhna lazmi hutta 

//filter example

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History') //ya oneline
userBooks = books.filter( (bk) => {                // ya return wala tareeqa
    return bk.publish >= 1995 && bk.genre === "History"
})


console.log(userBooks);

//map
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.map( (num) => num + 10) //ager yaha scop open kery phr return lagana pry ga
const newNums = myNums
                .map((num) => num * 10)//ham multilple map or filter laga skty han
                .map((num) => num + 1)//iss map ma opper waly map ki value aye gi
                .filter((num) => num >= 40)

console.log(newNums);//map auto return kerta


                                        //reduce 

  //In JavaScript, reduce() is an array method that takes all the elements of an array and 
  // reduces them to a single value (such as a sum, object, array, string, etc.).                                      
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal);
