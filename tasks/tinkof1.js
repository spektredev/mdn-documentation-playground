this.x = 10;
function foo() {
  const x = 10; // naeb
  return {
    x: 20,
    bar() {
      console.log(this.x);
    },
    baz: () => {
      console.log(this.x);
    }
  }
}

const obj1 = foo();

obj1.bar();
obj1.baz();

const obj2 = foo.call({ x: 30 })
let y = obj2.bar;
let x = obj2.baz;

y();
x();

obj2.bar();
obj2.baz();

const obj3 = new foo();
obj3.baz();