/*JavaScript mein Object ek data type hai jo multiple values ko key-value pairs ki 
form mein store karta hai*/
//there are two ways to declare objects 
// 1-literal (is sa ager obj create kry gy tu singlton nai bnta) 
// 2-constructor (singlton)
//object.create(constructor method to declare obj)
const sym= Symbol("key1")
const jsUser={                                      //obj declare by literal method
    name:"alisha" ,     //all keys will consider string by default
    age:18,
    [sym]: "symbol",
    location:"lhr",
    email:"alisha@455.com",
    isLogedIn:false,
    lastLogin:["mon","wed"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);//this will consider email string so ""this quotes are imp
console.log(jsUser[sym]);
jsUser.email="kjed@.com"
//Object.freeze(jsUser)//freeze is used to freeze obj so no one can change data in object
jsUser.email="jdfg@.com"
console.log(jsUser);


jsUser.greetings=function(){
    console.log("hello js user");
    
}

jsUser.greetingstwo=function(){
    console.log(`hello js user ${this.name}`);
}
console.log(jsUser.greetings());
console.log(jsUser.greetingstwo());

//inn dono ko run kerny k liya freeze waly console ko comment kerna pry ga