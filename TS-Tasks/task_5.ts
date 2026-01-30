function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirst([1, 2, 3, 4]);
const firstString = getFirst(["1", "2", "3"]);

console.log(firstNumber);
console.log(firstString)


function getProperty<T extends object, K extends keyof T>(
  obj: T,
  key: K,
): T[K] {
  return obj[key];
}

const men = {
  name: "Patel",
  age: 21,
};

const n = getProperty(men, "name");
console.log(n)
