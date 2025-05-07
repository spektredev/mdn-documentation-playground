// const array1 = ["one", "two", "three"];

// Array.prototype.reverseNew = function () {
//   const newArr = []
//   let tempIndex = 0;
//   for (let i = this.length-1; i >= 0; i--) {
//     newArr[tempIndex] = this[i];
//     tempIndex++; 
//   }
//   return newArr;
// }

// console.log(array1.reverseNew());

// мой вариант

const array1 = ["one", "two", "three"];

Array.prototype.reverseNew = function () {
  const len = this.length;
  // Переворачиваем элементы, проходя до середины массива
  for (let i = 0; i < Math.floor(len / 2); i++) {
    const temp = this[i];
    this[i] = this[len - 1 - i];
    this[len - 1 - i] = temp;
  }
  return this; // Возвращаем исходный массив
};

console.log(array1.reverseNew()); // ["three", "two", "one"]
console.log(array1); // ["three", "two", "one"] (массив изменился)

// официальный подход, очень интересный момент