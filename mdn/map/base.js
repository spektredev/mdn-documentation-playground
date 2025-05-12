/**
 * Файл с задачами для изучения объекта Map в JavaScript.
 * Охватывает создание, методы, итерацию, преобразования и другие аспекты Map.
 * Каждая задача сопровождается комментарием с объяснением.
 * Для проверки результата запустите файл в Node.js или браузере (консоль).
 */

// Задача 1: Создание Map и добавление элементов
// Создайте Map и добавьте несколько пар ключ-значение
console.log("Задача 1:");
const map1 = new Map();
map1.set("name", "Alice");
map1.set(42, "Answer");
map1.set(true, "Boolean key");
console.log("Map после добавления:", [...map1]); // Ожидаемый вывод: [["name", "Alice"], [42, "Answer"], [true, "Boolean key"]]

// Задача 2: Использование объектов как ключей
// Создайте Map, где ключами будут объекты
console.log("Задача 2:");
const keyObj1 = { id: 1 };
const keyObj2 = { id: 2 };
const map2 = new Map([
  [keyObj1, "Первый объект"],
  [keyObj2, "Второй объект"],
]);
console.log("Значение по ключу keyObj1:", map2.get(keyObj1)); // Ожидаемый вывод: Первый объект
console.log("Размер Map:", map2.size); // Ожидаемый вывод: 2

// Задача 3: Проверка наличия ключа с помощью has
// Проверьте наличие ключа в Map
console.log("Задача 3:");
const map3 = new Map([["a", 1], ["b", 2], ["c", 3]]);
console.log("Есть ли ключ 'b'?", map3.has("b")); // Ожидаемый вывод: true
console.log("Есть ли ключ 'd'?", map3.has("d")); // Ожидаемый вывод: false

// Задача 4: Удаление элемента с помощью delete
// Удалите элемент из Map и проверьте его отсутствие
console.log("Задача 4:");
const map4 = new Map([["x", 10], ["y", 20], ["z", 30]]);
console.log("До удаления:", [...map4]);
map4.delete("y");
console.log("После удаления 'y':", [...map4]); // Ожидаемый вывод: [["x", 10], ["z", 30]]
console.log("Есть ли 'y'?", map4.has("y")); // Ожидаемый вывод: false

// Задача 5: Очистка Map с помощью clear
// Очистите Map и проверьте её размер
console.log("Задача 5:");
const map5 = new Map([["p", 1], ["q", 2]]);
console.log("До очистки:", map5.size); // Ожидаемый вывод: 2
map5.clear();
console.log("После очистки:", map5.size); // Ожидаемый вывод: 0
console.log("Map пуст?", [...map5]); // Ожидаемый вывод: []

// Задача 6: Итерация по Map с помощью forEach
// Используйте forEach для вывода всех пар ключ-значение
console.log("Задача 6:");
const map6 = new Map([
  ["fruit", "apple"],
  ["color", "red"],
]);
map6.forEach((value, key) => {
  console.log(`Ключ: ${key}, Значение: ${value}`);
});
// Ожидаемый вывод:
// Ключ: fruit, Значение: apple
// Ключ: color, Значение: red

// Задача 7: Итерация с помощью for...of
// Используйте for...of для итерации по ключам, значениям и записям
console.log("Задача 7:");
const map7 = new Map([
  ["id", 101],
  ["name", "Bob"],
]);

console.log("Ключи:");
for (const key of map7.keys()) {
  console.log(key);
}
// Ожидаемый вывод: id, name

console.log("Значения:");
for (const value of map7.values()) {
  console.log(value);
}
// Ожидаемый вывод: 101, Bob

console.log("Записи:");
for (const [key, value] of map7.entries()) {
  console.log(`Ключ: ${key}, Значение: ${value}`);
}
// Ожидаемый вывод:
// Ключ: id, Значение: 101
// Ключ: name, Значение: Bob

// Задача 8: Преобразование Map в массив
// Преобразуйте Map в массив записей, ключей и значений
console.log("Задача 8:");
const map8 = new Map([
  ["a", 1],
  ["b", 2],
]);
const entriesArray = [...map8]; // Массив записей
const keysArray = [...map8.keys()]; // Массив ключей
const valuesArray = [...map8.values()]; // Массив значений
console.log("Записи:", entriesArray); // Ожидаемый вывод: [["a", 1], ["b", 2]]
console.log("Ключи:", keysArray); // Ожидаемый вывод: ["a", "b"]
console.log("Значения:", valuesArray); // Ожидаемый вывод: [1, 2]

// Задача 9: Создание Map из массива
// Создайте Map из массива пар ключ-значение
console.log("Задача 9:");
const array9 = [
  ["key1", "value1"],
  ["key2", "value2"],
];
const map9 = new Map(array9);
console.log("Map из массива:", [...map9]); // Ожидаемый вывод: [["key1", "value1"], ["key2", "value2"]]

// Задача 10: Перезапись значения для существующего ключа
// Измените значение для существующего ключа
console.log("Задача 10:");
const map10 = new Map([["item", "old"]]);
console.log("До перезаписи:", map10.get("item")); // Ожидаемый вывод: old
map10.set("item", "new");
console.log("После перезаписи:", map10.get("item")); // Ожидаемый вывод: new

// Задача 11: Использование Map для подсчёта частоты элементов
// Подсчитайте количество каждого элемента в массиве с помощью Map
console.log("Задача 11:");
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequencyMap = new Map();
fruits.forEach((fruit) => {
  frequencyMap.set(fruit, (frequencyMap.get(fruit) || 0) + 1);
});
console.log("Частота фруктов:", [...frequencyMap]); // Ожидаемый вывод: [["apple", 3], ["banana", 2], ["orange", 1]]

// Задача 12: Сравнение Map с обычным объектом
// Сравните поведение Map и объекта при использовании нестроковых ключей
console.log("Задача 12:");
const map12 = new Map();
const obj12 = {};
const key12 = { id: 1 };

map12.set(key12, "Map value");
obj12[key12] = "Object value";

console.log("Map значение:", map12.get(key12)); // Ожидаемый вывод: Map value
console.log("Object значение:", obj12["[object Object]"]); // Ожидаемый вывод: Object value
// Объект преобразует ключ в строку, Map сохраняет оригинальный ключ

// Задача 13: Копирование Map
// Создайте копию Map и проверьте независимость
console.log("Задача 13:");
const map13 = new Map([["a", 1], ["b", 2]]);
const map13Copy = new Map(map13);
map13Copy.set("c", 3);
console.log("Оригинальный Map:", [...map13]); // Ожидаемый вывод: [["a", 1], ["b", 2]]
console.log("Копия Map:", [...map13Copy]); // Ожидаемый вывод: [["a", 1], ["b", 2], ["c", 3]]

// Задача 14: Использование Map в цепочке с другими методами
// Преобразуйте Map в массив и отфильтруйте значения
console.log("Задача 14:");
const map14 = new Map([
  ["a", 10],
  ["b", 20],
  ["c", 5],
]);
const filteredValues = [...map14.values()].filter((value) => value > 10);
console.log("Значения больше 10:", filteredValues); // Ожидаемый вывод: [20]

// Задача 15: Сериализация Map в JSON
// Преобразуйте Map в JSON и обратно
console.log("Задача 15:");
const map15 = new Map([
  ["name", "Charlie"],
  ["age", 25],
]);
const jsonString = JSON.stringify([...map15]);
console.log("JSON строка:", jsonString); // Ожидаемый вывод: [["name","Charlie"],["age",25]]
const restoredMap = new Map(JSON.parse(jsonString));
console.log("Восстановленный Map:", [...restoredMap]); // Ожидаемый вывод: [["name", "Charlie"], ["age", 25]]

// Задача 16: Использование Map с итерируемыми объектами
// Создайте Map из другого Map с помощью итерации
console.log("Задача 16:");
const originalMap16 = new Map([["x", 1], ["y", 2]]);
const newMap16 = new Map(originalMap16.entries());
console.log("Новый Map из entries:", [...newMap16]); // Ожидаемый вывод: [["x", 1], ["y", 2]]

// Задача 17: Обработка пустого Map
// Проверьте поведение методов на пустом Map
console.log("Задача 17:");
const map17 = new Map();
console.log("Размер пустого Map:", map17.size); // Ожидаемый вывод: 0
console.log("Есть ли ключ 'test'?", map17.has("test")); // Ожидаемый вывод: false
console.log("Получение несуществующего ключа:", map17.get("test")); // Ожидаемый вывод: undefined
map17.forEach((value, key) => console.log(key, value)); // Ничего не выведет

// Задача 18: Использование Map для хранения функций
// Храните функции как значения в Map и вызывайте их
console.log("Задача 18:");
const map18 = new Map();
map18.set("greet", (name) => `Hello, ${name}!`);
map18.set("add", (a, b) => a + b);
console.log("Вызов greet:", map18.get("greet")("Alice")); // Ожидаемый вывод: Hello, Alice!
console.log("Вызов add:", map18.get("add")(3, 4)); // Ожидаемый вывод: 7

// Задача 19: Проверка типа ключа
// Проверьте, как Map обрабатывает ключи разных типов
console.log("Задача 19:");
const map19 = new Map();
map19.set(1, "number");
map19.set("1", "string");
map19.set(true, "boolean");
console.log("Ключ 1 (число):", map19.get(1)); // Ожидаемый вывод: number
console.log("Ключ '1' (строка):", map19.get("1")); // Ожидаемый вывод: string
console.log("Ключ true:", map19.get(true)); // Ожидаемый вывод: boolean

// Задача 20: Комбинирование нескольких Map
// Объедините два Map в один
console.log("Задача 20:");
const map20a = new Map([["a", 1], ["b", 2]]);
const map20b = new Map([["c", 3], ["d", 4]]);
const combinedMap = new Map([...map20a, ...map20b]);
console.log("Объединённый Map:", [...combinedMap]); // Ожидаемый вывод: [["a", 1], ["b", 2], ["c", 3], ["d", 4]]