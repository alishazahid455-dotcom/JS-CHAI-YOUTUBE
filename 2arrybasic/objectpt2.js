//constructor method
const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="alisha"
tinderuser.isLoggedIn=false
console.log(tinderuser);

const regularuser={
email:"akjdu",
fullname:{
    userfullname:{
        firstname:"alisha",
        lastname:"zahid"
    }
}
}
console.log(regularuser.fullname.userfullname);
//we can also merge object like array 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2}
//const obj3=Object.assign{obj1,obj2}
const obj3={...obj1,...obj2}//spread fun method
console.log(obj3)
console.log(Object.keys(tinderuser));//to access keys 
console.log(Object.values(tinderuser))// to access values
console.log(Object.entries(tinderuser));//her element ki key or value ko aik arry ma dy dy ga 
console.log(tinderuser.hasownproperty('isLoggedIn'));
