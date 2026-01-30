/**
 * Task 4:
 *  Promise.all with mixed delays Run two Promises with different delays and log results together.
 */

function delayedValue(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Promise for value "${value}" resolved after ${delay}`);
      resolve(value);
    }, delay);
  });
}

const promise1 = delayedValue('first delay', 1000);
const promise2 = delayedValue('second delay', 2000);

Promise.all([promise1, promise2]).then((result) => {
    console.log('Both promised resolved');
    console.log(`first promise -> ${result[0]}`);
    console.log(`second promise -> ${result[1]}`);
})
