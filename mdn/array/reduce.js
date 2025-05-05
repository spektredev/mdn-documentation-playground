Array.prototype.newReduce = function(callback, initialValue) {
  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const array1 = [1, 2, 3, 4];

const sumWithInitial = array1.newReduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sumWithInitial);

const sumWithoutInitial = array1.newReduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sumWithoutInitial);

// почти мой вариант :)