//module pattern(Code ko private aur organized rakhne ke liye.)
/*Design Pattern ek reusable solution hota hai jo software development mein common problems ko solve 
karne ke liye use kiya jata hai.Yeh code ko reusable, maintainable aur scalable banata hai.*/

function Counter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    };
}

const counter = Counter();

counter.increment();

console.log(counter.getCount()); // 1

//factory pattern(Sirf ek hi object create hota hai.)Pure program mein isi object ko use kiya jata hai.
const user = {
    name: "Alisha",
    age: 20
};

console.log(user);

//Factory Pattern(Object banane ke liye function use karte hain.)

function createUser(name, age) {
    return {
        name,
        age
    };
}

const user1 = createUser("Ali", 20);
const user2 = createUser("Sara", 22);

console.log(user1);
console.log(user2);

//constructor pattern(new keyword se object banate hain.)
function User(name, age) {
    this.name = name;
    this.age = age;
}

const user1 = new User("Ali", 20);

console.log(user1);
