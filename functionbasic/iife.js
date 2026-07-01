//iife(immediately invoked function expression)
//IIFE (Immediately Invoked Function Expression) is a function that is executed immediately
//  after it is created. It is mainly used to avoid polluting the global scope and to execute code
//  only once.
(function chai(){
    //named iife
    console.log(`db connected`);
    
})();//simply bas isko paraenthises ma likh dety or call nai kertu bas ya()dal dety
//; jab du iife use kerny hu phr semicolon lagaty error na ayae ta k


((name)=> {
    //parameter iife
    console.log(`application started ${name}`);
    
})("alisha");//arrow function ha ya