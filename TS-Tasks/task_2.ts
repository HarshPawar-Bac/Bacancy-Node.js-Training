/**Task 2: Interface with optional property
Create a User interface with optional email.
 */


interface User{
    name: string,
    age: number,
    email?: string
}

const user1: User = {
    name: 'harsh',
    age: 29,
}

const user2: User = {
    name: 'meetraj',
    age:89,
    email: 'meetraj@gmail.com'
}

console.log(user1);
console.log(user2);