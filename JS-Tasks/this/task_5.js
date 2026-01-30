/**Task 5: this in arrow vs normal function Observe difference */

const user = {
    name: 'harsh',
    normalFn: function(){
        return `you are ${this.name}`
    },
    arrowFn: () => {
        return `you are ${this.name}`
    }
}

console.log(user.normalFn());
console.log(user.arrowFn());

/* * arrow function takes 'this' from outer scope(global scope) */