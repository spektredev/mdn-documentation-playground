/* Что выведет консоль? */

function* subGenerator() {
  console.log('subGenerator: начало');
  yield 'SUB1';
  console.log('subGenerator: середина');
  yield 'SUB2';
  console.log('subGenerator: конец');
  return 'SUB_END';
}

function* mainGenerator() {
  console.log('mainGenerator: старт');
  try {
    const input = yield 'MAIN_GIVE_ME_DATA';
    console.log('mainGenerator: получил', input);

    const subResult = yield* subGenerator();
    console.log('mainGenerator: результат подгенератора', subResult);

    yield 'MAIN_LAST';
  } catch (e) {
    console.log('mainGenerator: поймана ошибка', e.message);
    yield 'RECOVERED';
  }
  console.log('mainGenerator: завершение');
  return 'MAIN_END';
}

function* infiniteNumbers() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

console.log('Начало программы');

const mainGen = mainGenerator();
const numGen = infiniteNumbers();

console.log('Шаг 1:', mainGen.next());

console.log('Шаг 2:', mainGen.next('Внешние данные'));

console.log('Шаг 3:', mainGen.next());

console.log('Шаг 4:', mainGen.next());

console.log('Шаг 5:', mainGen.throw(new Error('Ошибка!')));

console.log('Шаг 6:', mainGen.next());

console.log('Шаг 7:', numGen.next().value, numGen.next().value);

const newMainGen = mainGenerator();
console.log('Шаг 8:', [...newMainGen]);

console.log('Конец программы');