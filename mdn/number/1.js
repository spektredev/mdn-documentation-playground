const name = "Lydia Hallie";
const age = 21;

console.log(Number.isNaN(name));
console.log(Number.isNaN(age));

console.log(isNaN(name));
console.log(isNaN(age));

isNaN("123abc"); // true, потому что Number("123abc") === NaN
isNaN(""); // false, потому что Number("") === 0
isNaN(true); // false, потому что Number(true) === 1
console.log(isNaN(2 + "1"));
console.log(Number(1 + "5"));
console.log(Number(1 + "a"));

