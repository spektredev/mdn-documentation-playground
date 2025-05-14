const info = {
  [Symbol('a')]: 'b'
}

console.log(info)
console.log(Object.keys(info))

const a = Symbol('a');
const obj = {
  ["s"+"d"] : "5",
  test: 5
};
console.log(obj);
console.log(a.valueOf());
