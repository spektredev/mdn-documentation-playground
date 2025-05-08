function* myGenerator() {
  console.log('Начало');
  yield 1;
  console.log('После первой паузы');
  yield 2;
  console.log('Конец');
  return 'Завершено';
}

const gen = myGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* myGeneratorTwo() {
  yield 1;
  yield 2;
  yield 3;
}

const gen2 = myGeneratorTwo();
console.log(gen2.next());
console.log(gen2.return('Рано закончили'));
console.log(gen2.next());

function* subGenerator() {
  yield 'a';
  yield 'b';
}

function* mainGenerator() {
  yield 1;
  yield* subGenerator();
  yield 3;
}

const gen3 = mainGenerator();
console.log();
console.log([...gen3]); // [1, 'a', 'b', 3]