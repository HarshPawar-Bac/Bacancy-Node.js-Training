// Task -> Write a function that correctly identifies the real type of a value.

function getExactType(value) {
  if (value === null) return "null";

  if (Array.isArray(value)) return "array";

  return typeof value;
}


console.log(getExactType(10) )             // "number"
console.log(getExactType("hello"));         // "string"
console.log(getExactType(true));            // "boolean"
console.log(getExactType(null));            // "null"
console.log(getExactType(undefined));      // "undefined"
console.log(getExactType([]));         // "array"
console.log(getExactType({}));           // "object"
console.log(getExactType(function () {}));    // "function"
