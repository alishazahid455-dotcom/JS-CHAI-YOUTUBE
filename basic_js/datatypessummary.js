/*datatypes on the bases of store in memory and access
1-premitive (call by value)
   number,string,boolean,null,undefined,gitint,symbol

   2-non premitive types(call by reference)
     arrays,objects,functions
     cont arry1=["alis","ahmed",umair]array example
     {
     name="alisha"
     age=18
     } ju bi inn curly braces ma likhty inko object bolty inn curly braces ko
      const myfun=function(){} ya function ki defination or usko variable myfun ma store ker diya
       non premitive types ka return type function hi atta or function ka function object atta*/

       // stack(primitive datatype use stack) heap(non primitive)
       //stack ma var ka copy milti heap ma reference
       let myYouTubeName = "alisha";
let anOtherName = myYouTubeName;

anOtherName = "chaiorcode";

console.log(anOtherName);
console.log(myYouTubeName);

let userOne = {
    email: "alisha6",
    upi: "jsd6"
};

let userTwo = userOne;

userTwo.email = "jdkfg7";

console.log(userOne.email);
console.log(userTwo.email);