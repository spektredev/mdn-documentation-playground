const arr = [1,2,3,4]

Array.prototype.newMap = function (callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const temp = callback.call(thisArg, this[i], i, this);
    result[i] = temp;
  }
  return result;
}
const customThis = { a: 1, b: 2 } 
const newArr = arr.newMap((el)=>{
  return el*2;
}, customThis)
console.log(newArr);

// мой вариант