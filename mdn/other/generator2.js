function* fetchData() {
  const data1 = yield new Promise(resolve => setTimeout(() => resolve('Данные 1'), 1000));
  console.log(data1);
  const data2 = yield new Promise(resolve => setTimeout(() => resolve('Данные 2'), 1000));
  console.log(data2);
}

function run(generator) {
  const gen = generator();
  function step(result) {
    if (result.done) return;
    result.value.then(data => step(gen.next(data)));
  }
  step(gen.next());
}

run(fetchData);