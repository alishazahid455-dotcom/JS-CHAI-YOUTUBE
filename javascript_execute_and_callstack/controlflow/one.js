const isUserloggedIn = true
const temperature = 41

if ( temperature === 41 ){
    console.log("less than 50");
}
console.log("temperature is greater than 50");
// <, >, <=, >=, ==, !=, ===, !==
const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

//console.log(`User power: ${power}`);//it will give error bcz power will usedd in local scope not globaly
const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    console.log("less than");
} else if (balance < 750) {
    console.log("less than 750");

} else if (balance < 900) {
    console.log("less than 750");
    
}else {
    console.log("less than 1200");
}
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

/*****truthy.js */
const userEmail = ""

if (userEmail) {//ya sirf check kery ga k useremail ha kis k equal ha ya nai
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


/*falsy values
false,0,-0,Bigint 0n,"",null,undefined,nan*/ 

/*truthy.js
"0","false"," "(space k sath truthy),[ ],function(){}*/

const userEmail=""
if (userEmail.length === 0) {    // to check through arry
    console.log("Array is empty");
}

const emptyObj = {}   ////through object 

if (Object.keys(emptyObj).length === 0) {    
    console.log("Object is empty");
}

//nullish coalescing operator(??):null or undefinedd k liya

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);
Agar left side ki value:

// null ho
// undefined ho

// to ye right side ki value return karta hai.





//ternary operator
const iceprice=100
iceprice<=80 ? console.log("less than 80") :console.log("more than 80 ");
                           //ya wali true                   ya false
