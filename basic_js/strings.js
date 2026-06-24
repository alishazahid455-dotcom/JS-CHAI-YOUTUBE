const name= "alisha"
const age=18
//console.log(name + age + "value"); old method
//new method
console.log(`hello my name is ${name} and my age is ${age} `); // stringinterpolation
const gameName= new String("alisha") //another method to declare strings by using new keyword as object

//strings my value keypair my hutti mean 0 index py h tu 0 index h value 
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//kis index py konsa character check kry k liya ya fun use hutta
console.log(gameName.indexOf('t'));//iss char ka kaya index 

const newString=gameName.substring(0,3)
console.log(newString);
const anOtherString=gameName.slice(-6,4)
console.log(gameName.anOtherString);

const newStringOne="   alisha   "
console.log(newStringOne);
console.log(newStringOne.trim());//remove extra spaces
const url="https://alisha.com/alisha%20zahid"
console.log(url.replace('%20','-'));
console.log(url.includes('alisha'));



