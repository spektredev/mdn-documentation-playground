console.log(1);

Promise.resolve()
  .then(()=> console.log("2"))
  .then(()=> console.log("3"))
  .finally(()=> console.log("13"))
  .then(()=> console.log(4))

queueMicrotask(()=>console.log(5))

Promise.reject()
  .then(()=> console.log("8"))
  .catch(()=> console.log(9))
  .then(()=> console.log("10"))
  .finally(()=> console.log("11"))
  .then(()=> console.log("20"))

console.log(12);