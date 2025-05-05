// 1
const obj = {
  a: 1,
  say() {
    console.log(this.a);
  }
}
const fn = obj.say;

fn() // undefined

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter()); // NaN (Number * undefined = NaN)