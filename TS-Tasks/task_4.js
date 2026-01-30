/**Task 4: Function with typed object parameter
Use an interface in a function parameter.
 */
var user20 = {
    name: 'harsh',
    age: 292,
    email: 'harsh@gmail.com'
};
function get(user) {
    return "\n      your name is ".concat(user.name, ", your age is ").concat(user.age, ", you are logged in with ").concat(user.email, "\n    ");
}
console.log(get(user20));
