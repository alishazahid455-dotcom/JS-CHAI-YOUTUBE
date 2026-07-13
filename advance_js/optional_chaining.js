/*Optional Chaining (?.) kisi object ki property ko safely access karne ke liye use hoti hai. 
Agar property exist na kare, to error dene ki bajaye undefined return karti hai.*/
//property not exist
const user = {
    name: "Alisha"
};

console.log(user.address?.city);
/*JavaScript ne pehle check kiya:

"Kya address exist karta hai?" Nahi.To usne aage .city access hi nahi ki aur seedha undefined de diya.*/

//property exist
const user = {
    name: "Alisha",
    address: {
        city: "Lahore"
    }
};

console.log(user.address?.city);

//function may use
const user = {
    greet() {
        console.log("Hello");
    }
};

user.greet?.();
//normal chaining
//user.address.city    👉 Agar address missing ho to TypeError.

//Optional Chaining
//user.address?.city      👉 Agar address missing ho to undefined.
