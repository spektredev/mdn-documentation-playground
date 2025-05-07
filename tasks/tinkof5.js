let obj = { a: 1 };
let array = [obj]
obj = null;
console.log(array);

// мое решение [{ a: 1 }]
// ну, это изи на самом деле