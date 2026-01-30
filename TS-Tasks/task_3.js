/**Task 3: Union types
Allow function input to be string or number.

 */
function info(person) {
    if (typeof person === 'number') {
        return "Person age is ".concat(person);
    }
    return "{Person name is ".concat(person);
}
console.log(info('harsh'));
console.log(info(93));
