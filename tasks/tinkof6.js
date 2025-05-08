Array.prototype.findUnique = function() {
  const newArr = [];
  let foundDublicate = false;
  for (let i = 0; i < this.length; i++) { 
    this.map((val, index)=>{
      if (i!==index && this[i]===val) {
        foundDublicate = true;
      }
    })
  if (!foundDublicate) {
    newArr.push(this[i]);
  }
  else {
    foundDublicate = false;
  }
  }
  return newArr;
}
const newArr = [10,5,10,0,6,6,7,2,9,9].findUnique()
console.log(newArr);