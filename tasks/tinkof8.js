let obj = { a: 1 }
let array = [obj];

obj = { ...obj, b: 5 }

console.log(obj); // { a: 1, b: 5 }
console.log(array); // [{a:1}]

// легкий уровень, решил