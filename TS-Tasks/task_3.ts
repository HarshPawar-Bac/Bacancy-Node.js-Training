/**Task 3: Union types
Allow function input to be string or number.

 */

function info(person: number | string){
    if(typeof person === 'number'){
        return `Person age is ${person}`
    }
    return `Person name is ${person}`
}

console.log(info('harsh'));
console.log(info(93));

