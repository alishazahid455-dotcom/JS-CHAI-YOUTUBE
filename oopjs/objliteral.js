//oop ma object ki class hutta 
//object literal
const user={
    username:"Alisha",
    logincount:8,
    signedin:true,
    getuserdetails:function(){
        //console.log("got user details from db");
        //console.log(`username ${this.username}`);//this k bagair nai chly ga ku k usko context hini pta hu ga
        console.log(this);
        
        
    }
}
console.log(user.username);
console.log(user.getuserdetails);

//constructor
//constructor her bar aik new copy dey deta 
function User(username,logincount,isloggedin){
    this.username=username   //left side wala variable ha this sirf iss liya lagaya k pta rehy k var or right side wala opper parameter wala username ha
    this.logincount=logincount
    this.isloggedin=isloggedin
}
const userone=new User("alisha",6,true)//new keyword override ni kry ga
const usertwo=new User("rabiya",6,false)

console.log(userone);
console.log(usertwo);
//1-jessy hi new keyword use kerty aik empty object create hutta
//2- aik constructor function bnta new keyword ki waja sa or parameter uss my pack kerta
//3- this ma add hu jaye gay parameter
//4- phr function ma mil jaty
function createuser(username,score){
    this.username=username
    this.score=score

}
createuser.prototype.increment=function(){
this.score++    
}

createuser.prototype.printme=function(){
    console.log(`price is ${this.score}`);
    
}
const chai=new createuser("alisha",24)
const tea= createuser("tea",23)
chai.printme()

/*Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
 This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this
 is bound to the newly created object. If no explicit return value is*/
