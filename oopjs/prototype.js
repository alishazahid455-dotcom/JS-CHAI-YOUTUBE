let myhero = ["alisha", "rabiya"];

let heropower = {
    thor: "hammer",
    spider: "sling",

    getspiderpower: function () {
        console.log(`Spider power is ${this.spider}`);
    }
};

Object.prototype.alisha = function () {
    console.log("alisha is present in all objects");
};

heropower.alisha();
myhero.alisha();

const user = {
    name: "Alisha"
};

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport  //ya tareeqa bi ker skty
};

Teacher.__proto__ = user;// ya bi

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherusername = "sheza     ";

String.prototype.trueLength = function () { // ya ham khud 
    console.log(this.trim().length);
};

anotherusername.trueLength();