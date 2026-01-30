function getFirst(arr) {
    return arr[0];
}
var firstNumber = getFirst([1, 2, 3, 4]);
var firstString = getFirst(["1", "2", "3"]);
console.log(firstNumber);
console.log(firstString);
function getProperty(obj, key) {
    return obj[key];
}
var men = {
    name: "Patel",
    age: 21,
};
var n = getProperty(men, "name");
console.log(n);
