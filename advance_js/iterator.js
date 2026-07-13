/* Iterator ek object hota hai jo collection (jaise array ya string) ki values ko one by 
one access karta hai. Iske paas next() method hota hai jo har call par { value, done } return 
karta hai.*/

/*Yahan JavaScript ne ek iterator object bana diya.Iterator ka kaam sirf ye hai:"Main yaad rakhunga
 ke abhi array ki kis position par hoon."*/

const fruits = ["Apple", "Mango", "Orange"];

const iterator = fruits[Symbol.iterator]();

console.log(iterator.next()); // 1
console.log(iterator.next()); // 2
console.log(iterator.next()); // 3
console.log(iterator.next()); // 4
//false batata k abi or elements ha 
//true batata k next koi element ni 


const fruits = ["Apple", "Mango", "Orange"];

const it = fruits[Symbol.iterator]();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
//ya sirf value print kery ga 
