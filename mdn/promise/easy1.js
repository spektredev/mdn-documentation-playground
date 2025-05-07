queueMicrotask(()=>{
  console.log('test2');
})

new Promise((resolve,reject)=>{
  console.log('hi');
  
  resolve('test');
}).then((val)=>console.log(val)
)
setTimeout(()=>{
  console.log('timeot');
  
},0)

