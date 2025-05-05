const arr = [1,2,3,4]

Array.prototype.forEachNew = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this);
  }
  return undefined;
}
const customThis = { a: 1, b: 2 } 
arr.forEachNew((el)=>{
  console.log(el*2);
}, customThis)

// почти сам написал, забыл что возвращает undefined