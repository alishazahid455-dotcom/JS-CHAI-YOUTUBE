const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]); 

const allHeros = marvel_heros.concat(dc_heros) //concatenate method to combine two arrys
console.log(allHeros);
const all_new_heros = [...marvel_heros, ...dc_heros] //spread fun to combine two arrys (preferable)

console.log(all_new_heros);
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)//flat fun to write elements in single arry
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))//isarry fun used to find is heitsh is arry or not 
console.log(Array.from("Hitesh"))//convert heitesh to arry
console.log(Array.from({name: "hitesh"})) // interesting not easily convertable to arry it will 
// convertaccording to key or value (interview imp)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//convert multiple to arry