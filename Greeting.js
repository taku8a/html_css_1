console.log("Good morning");

console.log("Good afternoon");

console.log("Good evening");

var num;
num = 1;
console.log(num);

var num01 = 123;
var num02 = 1.23;

console.log(typeof(num01));
console.log(typeof(num02));

var a = ["sato","suzuki"];

console.log(a[0]);
console.log(a[1]);

var age = 22;

if (age >= 20) {
  console.log("test1");
} else if (age == 0) {
  console.log("test2");
} else {
  console.log("test3");
}

function say_hello() {
  console.log("Hello World");
}

say_hello();


var Student = class {
  constructor(name) {
    this.name = name;
  }
  avg(math, english) {
    console.log((math + english) / 2);
  }
};

var a001 = new Student("tanaka");
console.log(a001.name);
a001.avg(80, 70);

var a002 = new Student("ito");
console.log(a002.name);
a002.avg(40, 70);
