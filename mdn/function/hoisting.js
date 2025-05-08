// Очень хорошая задача, напоминалка по функциям
a(); // Работает, так как function declaration поднимается (hoisting)

// 1. Function Declaration (подвергается hoisting)
function a() {
  console.log('Function Declaration: работает из-за hoisting');
}

// 2. Function Expression (не подвергается hoisting)
const b = function() {
  console.log('Function Expression: не поднимается, доступна только после объявления');
};

// 3. Arrow Function (не подвергается hoisting)
const c = () => {
  console.log('Arrow Function: компактный синтаксис, не поднимается');
};

// 4. Immediately Invoked Function Expression (IIFE)
(function() {
  console.log('IIFE: выполняется сразу, часто используется для изоляции области видимости');
})();

// 5. Named Function Expression (для рекурсии или отладки)
const d = function namedFunction() {
  console.log('Named Function Expression: имя функции доступно внутри неё');
};

// 6. Generator Function (для работы с итераторами)
function* generatorFunction() {
  console.log('Generator Function: начало');
  yield 'Пауза 1';
  console.log('Generator Function: продолжение');
  yield 'Пауза 2';
  console.log('Generator Function: конец');
}

// 7. Method in Object (функция как метод объекта)
const obj = {
  method() {
    console.log('Object Method: функция как метод объекта');
  }
};

try {
  bBefore();
} catch (e) {
  console.log('Ошибка: bBefore не доступна до объявления из-за отсутствия hoisting');
}

const bBefore = function() {
  console.log('Function Expression: вызвана после объявления');
};

console.log('\nВызов всех функций:');
a();
b();
c();
d();
obj.method();

console.log('\nРабота с генератором:');
const gen = generatorFunction();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);

console.log('\nHoisting с var:');
console.log(typeof hoistedVar);
var hoistedVar = function() {
  console.log('Var Function: поднята только декларация переменной');
};
hoistedVar();

var n = 5;
console.log(n);

