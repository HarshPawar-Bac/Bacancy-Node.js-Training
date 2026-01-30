/**Task 4: 
 * this in constructor 
 * Create a constructor function using this.
 */

function MakeUser(name) {
  this.name = name;
  this.getName = function () {
    return `You are ${this.name}`;
  };
}

const person1 = new MakeUser("harsh");
const person2 = new MakeUser("meetraj");

console.log(person1.getName());
console.log(person2.getName());
