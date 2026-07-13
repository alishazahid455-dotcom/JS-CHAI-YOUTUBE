//Generator function ke baad * lagta hai.
//function*   1-yield   2-Ye dono generator ki pehchan hain.

function* show() {
    console.log("A");
    yield 1;

    console.log("B");
    yield 2;

    console.log("C");
}

const gen = show();//call kerny sa output nai deta ya generator function sirf object return krta
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


function test() {
    return 10;
    console.log("Hello");
}

console.log(test());


//return k bad function khatm hu jata 
//yield sirf pause kerta 
/*Generator ek special function (function*) hai jo yield keyword ki madad se execution 
ko pause aur resume karta hai aur automatically ek iterator return karta hai.*/