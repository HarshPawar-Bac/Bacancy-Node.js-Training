/**Task 4: Function with typed object parameter
Use an interface in a function parameter.
 */

interface Person{
    name: string,
    age: number,
    email?: string,
}

const user20 = {
    name: 'harsh',
    age: 292,
    email: 'harsh@gmail.com'
}

function get(user: Person){
    return `
      your name is ${user.name}, your age is ${user.age}, you are logged in with ${user.email}
    `
}

console.log(get(user20));

