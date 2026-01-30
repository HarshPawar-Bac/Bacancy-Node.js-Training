/**Task 2: this loss in function
Fix the this issue.
❌ Problem
const user = {
  name: "Fenil",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

    right now output will be undefined. now resolve this we just have to write a console.log in arrow function instead of normal function, so now 'this' will point to an object itself. 
 */
 


const user = {
  name: "Fenil",
  greet() {
    setTimeout( () => {
      console.log(this.name);
    }, 1000);
  },
};


user.greet()


