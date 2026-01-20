function isTruthy(value) {
  // your code
    return !!value;
}

console.log(isTruthy(1))      // true
console.log(isTruthy(0));      // false
console.log(isTruthy(""));       // false
console.log(isTruthy(" "));    // true
console.log(isTruthy([]));       // true
console.log(isTruthy({}));    // true
console.log(isTruthy(null));    // false
console.log(isTruthy(undefined)); // false


function processInput(value) {
  // your code
  if(typeof value === 'number')
    return value**2

  if(typeof value === 'string')
    return value.split("").reverse().join("");

  return "unsupported";
}



function sum(a, b) {
    console.log(a,b)
  console.log(this.prefix + (a + b));
}

const obj = { prefix: "Total: " };

const boundSum = sum.bind(obj, 2);

boundSum(3);

function Person(name) {
  this.name = name;
}

Person.prototype.greet = () => {
  console.log("Hello, " + this.name);
};

Person.prototype.age = 23;
const p1 = new Person("Harsh");
p1.greet();
console.log(p1.age)
const p2 = new Person('mitraj');
console.log(p2.age);


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks");
  }
}

const d = new Dog("Rex");
d.speak();


try {
  throw new Error("Oops");
} catch (e) {
  console.log("Caught:", e.message);
} finally {
  console.log("Finally block");
}


// console.log("Start");

// Promise.resolve().then(() => console.log("Promise 1"));
// Promise.resolve().then(() => console.log("Promise 2"));

// console.log("End");


// console.log("Start");

// async function foo() {
//   console.log("Inside foo");
//   await Promise.resolve();
//   console.log("After await");
// }

// foo();
// console.log("End");


const set = new Set();
set.add(1);
set.add(2);
set.add(1);

console.log(set.size);
console.log(set.has(2));
console.log(set.has(3));



const map = new Map();
map.set("name", "Harsh");
map.set("age", 22);
map.set("name", "Pawar");

console.log(map.size);
console.log(map.get("name"));
console.log(map.get("age"));



const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [...arr1, ...arr2];
console.log(merged);

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4));


const user = { name: "Harsh", address: { city: "Mumbai" } };

console.log(user.address?.city);
console.log(user.contact?.phone ?? "No phone");


const name = "Harsh";
const age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);

function tag(strings, name, age) {
  return `${strings[0]}${name.toUpperCase()}${strings[1]}${age + 1}${strings[2]}`;
}

console.log(tag`My name is ${name} and I am ${age} years old.`);
