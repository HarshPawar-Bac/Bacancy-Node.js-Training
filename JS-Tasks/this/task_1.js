/**
 * Task 1:
 * this inside object method Log object property using this.
 */

const user = {
  firstName: "Harsh",
  getName() {
    return this.firstName;
  },
};

console.log(user.getName());