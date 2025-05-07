// // // 4
// const { foo: [bar], bar: foo } = { foo: [1], bar: [{ baz: 3 }] };
// console.log(4, { foo, bar }); // 4 { foo: [ { baz: 3 } ], bar: 1 }

// // 5
const { foo: [bar], bar: [{baz: foo}] } = { foo: [1], bar: [{ baz: 3 }] };
console.log(5, { foo, bar }); // { foo: 3, bar: 1 }

// сложный уровень, задача бессмысленная, не решил