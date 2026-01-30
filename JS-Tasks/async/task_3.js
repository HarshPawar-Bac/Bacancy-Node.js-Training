async function wait(delay) {
  let response = await new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("status 404");
    }, delay);
  });

  return response;
}

console.log(wait(1000).then((data) => console.log(data)).catch(err => console.log(err)));
console.log(wait(2000).then((data) => console.log(data)).catch(err => console.log(err)));
