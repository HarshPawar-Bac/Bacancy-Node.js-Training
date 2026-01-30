var obj = {
  name: "harsh",
};

function sayHello(age) {
  return "hello " + this.name + age;
}

console.log(sayHello.call(obj, 24));
