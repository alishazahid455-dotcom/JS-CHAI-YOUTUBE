function myname(){
    console.log("a");
    console.log("l");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");

}
//mynameager iss terha likhy tu sirf reference hutta ya 
myname()//iss terha likhy phr execute hutta 
function addtwono(no1,no2){ //parameters
console.log(no1+no2);
}
addtwono(3,5)//arguments
addtwono(3,"a")//its output will 3a bcz there is one string
function add(n1,n2){
let result=n1+n2
return result
}
const result=add(3,4)
console.log("result is:",result);
function loginuser(username){
    if(username===undefined){
        console.log("plz enter username");
        return//ya nichy wala return nai print kerwaye ga
    }
    return `${username} just logged in`
}
console.log(loginuser("alisha"));//ager yaha koi value pass na kery tu undefined just logged in aye ga

function calculateprice(...num1){ //...is a rest operator which is used to combine multiple val 
    return num1
}
console.log(calculateprice(200,300,400))
/*ham (val1,val2,...num1 )assy bi likh skty lakin iss case ma ju ham values dy gay uss ma say pheli 
du phr ni show hu gi ku k wo inko assign hu jaye gi baqi ...num1 sari show hu gi*/

//****************handel object ******************************//
const user={      //object
    username:"alisha",
    price:299
}
function handleobject(anyobject){
console.log(`username is  ${anyobject.username}  and price is  ${anyobject.price}`);

}
handleobject(user)//yaha real object ka nam hi likhy gy 
/*handleobject({
     username:"alisha",
     price:299
 }) ham iss terha bi call ker skty*/
  
 
 /***********array through function */
 
 
 const mynewarry=[200,300,400]
  
  function arryvalue(getarry){//koi bi parameter ka nam rakh skty yaha
     return getarry[2]
  }
console.log(arryvalue(mynewarry));

