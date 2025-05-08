let obj = { a: 1 }
let array = [obj];

obj = { ...obj, b: 5 }

console.log(obj);
console.log(array);
