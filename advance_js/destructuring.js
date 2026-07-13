/*Destructuring ek ES6 feature hai jis se hum array ya object ki values ko alag-alag variables
mein asani se store kar sakte hain.*/
//destructuring sa phely
const student = {
    name: "Alisha",
    age: 20
}

const name = student.name;
const age = student.age;

console.log(name);
console.log(age);

//destructuring k bad
                           //object destructuring
const student = {
    name: "Alisha",
    age: 20
}

const { name, age } = student; //destructuring

console.log(name);
console.log(age);

                         //array destructuring

const colors = ["Red", "Green", "Blue"];

const [first, second] = colors;

console.log(first);  // Red
console.log(second); // Green

                         //function destructuring

const user = {
    name: "Alisha",
    age: 20
}

function printUser({ name, age }) {
    console.log(name);
    console.log(age);
}

printUser(user);
//run iss liya nai hu ga ku kay same variable name use kiyea, just for understanding 
