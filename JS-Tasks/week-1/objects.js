// 1-> object.assign() methods

const target = { a: 1, b: 2 };
const source = { c: 4, d: 5 };

const newObj = Object.assign(target, source);
console.log(newObj);


// Primitives will be wrapped to objects
const result = Object.assign("hello", { a: 1 });

console.log(result);

//Merging objects with same properties
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }

// 2-> object.create() methods : The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

const person = {
  isHuman: false,
  printIntroduction() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; 
me.isHuman = true;

me.printIntroduction();





