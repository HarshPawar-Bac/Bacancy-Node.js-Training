// 🚀 Next Challenge — Closures (Very Important Interview Topic)
// Problem 5 — Counter with Closure

// Create a function createCounter() that:

// Returns a function

// Each call increments a private counter

// Counter cannot be accessed directly

function createCounter(){
    let count = 0;
    return function increment(){
        return count++;
    }
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());