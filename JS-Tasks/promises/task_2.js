/** 
 * Task 2: 
 * Promise chaining with transformation
 * Start with 3, square it, then add 10.
 */

function transform(value) {
  return new Promise((resolve, reject) => {
    resolve(value);
  });
}

transform(3)
  .then((value) => {
    console.log(`square of ${value} = ${value ** 2}`);
    return value ** 2;
  })
  .then((value) => {
    console.log(`add 10 in ${value} = ${value + 10}`);
    return value + 10;
  })
  .catch((err) => console.log(err));

  transform(4)
    .then((value) => {
      console.log(`square of ${value} = ${value ** 2}`);
      return value ** 2;
    })
    .then((value) => {
      console.log(`add 10 in ${value} = ${value + 10}`);
      return value + 10;
    })
    .catch((err) => console.log(err));
