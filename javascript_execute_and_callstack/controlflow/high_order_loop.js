//maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
//for of loop
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
//for of loop does not work on object 


                             //     for in loop use for object

    const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
                 // array pay bi use ker skty
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

// Map iterable hota hai, isliye is par for...of use hota hai.
// for...in Map par kaam nahi karta.


// forEach() array ka method hai.
// Iske andar callback function pass kiya jata hai.
// Callback normal function ya arrow function dono ho sakta hai.
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){    //ya function ka nam nai likhty callback ma
    console.log(val);
} )


coding.forEach( (item) => {   //arrow function pay bi laga skty call back
    console.log(item);
} )


coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} ) //ya wala tareeqa bi ker skty


 const myCoding = [

    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )