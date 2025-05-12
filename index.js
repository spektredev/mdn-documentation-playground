const arr = [1, 2, 3];
const obj = { name: "Alice" };

console.log(arr.__proto__ === Array.prototype); // true
console.log(obj.__proto__ === Object.prototype); // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true (Array.prototype наследует от Object.prototype)
console.log(obj.__proto__.__proto__); // null (конец цепочки прототипов)
console.log(obj.__proto__); // ?