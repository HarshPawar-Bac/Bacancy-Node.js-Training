/**
 * Task 1:
 * Promise with conditional resolve/reject
 * Create a function that returns a Promise:
 * Resolves if age ≥ 18
 * Rejects otherwise
 */

function isAdult(age){
    return new Promise((resolve, reject) => {
        if(age >= 18){
            resolve('person is above 18')
        } else {
            reject('person is below 18');
        }
    })
}

let person1 = isAdult(30);
person1.then(data => console.log(data)).catch(err => console.log(err));

let person2 = isAdult(16);
person2.then(data => console.log(data)).catch(err => console.log(err))

