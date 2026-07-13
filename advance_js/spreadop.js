/*Spread Operator (...) ek ES6 feature hai jo array ya object ke elements/properties ko 
expand (phailane), copy karne aur merge karne ke liye use hota hai.*/
//1. copy using spread
const arr1 = [1, 2, 3];

const arr2 = [...arr1];

arr2.push(4);

console.log(arr1);
console.log(arr2);
//sirf arry2 ma change aye ga 
//2. Arrays Merge using spread
const arr1 = [1,2];
const arr2 = [3,4];

const arr3 = [...arr1, ...arr2];

console.log(arr3);
//new element add
const fruits = ["Apple","Mango"];

const newFruits = [...fruits,"Orange"];

console.log(newFruits);

//object sa spread kerna

const user = {
    name: "Alisha",
    age:20
}

const user2 = {
    ...user
};

console.log(user2);
//add property to obj
const user = {
    name:"Alisha"
}

const updatedUser = {
    ...user,
    age:20
}

console.log(updatedUser);
//object merge
const obj1 = {
    name:"Alisha"
}

const obj2 = {
    age:20
}

const obj3 = {
    ...obj1,
    ...obj2
}

console.log(obj3);

//spread array or object ma use hutta

//same variable ki waja sa run nai hu ga just for understanding
