const user={
    username:"alisha",
    price:99,
    welcomemsg:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
        
    }

}
// user.welcomemsg()
// user.username="sam"
// user.welcomemsg()   
console.log(this );//this will give empty object ku k iss scope my khuch ha hi ni browser py global obj window ha


function chai(){
    let username="alisha"
    console.log(this.username);
    
}
//chai()//this will many values but will not give username values
const chai=() => {
let username="alisha"
console.log(this.username);//iss ma ya undefined dy ga

}
chai()

const addtwo=(n1,n2)=>{
    return n1+n2
}

//implicit return 
const addtwo=(n1,n2)=> (n1+n2)
const addtwo=(n1,n2)=> ({username:"alisha"})//iss object ko return krny k liya parenthesis likhny hi hs

console.log(addtwo(3,4)) 
//Arrow function ka apna this nahi hota.

//Wo bahar wale scope ka this use karti hai.

//Isliye object ke methods ke liye normal function use karna zyada common hai.
