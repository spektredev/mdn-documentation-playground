// Преобразование строки JSON в объект
const jsonString = '{"name": "Алексей", "age": 30}';
const obj = JSON.parse(jsonString);
console.log(obj); // { name: "Алексей", age: 30 }
console.log(obj.name); // Алексей

// Использование reviver для преобразования значений
const jsonWithDate = '{"name": "Алексей", "birthDate": "1995-05-13"}';
const parsed = JSON.parse(jsonWithDate, (key, value) => {
  if (key === 'birthDate') return new Date(value);
  return value;
});
console.log(parsed.birthDate); // 1995-05-13T00:00:00.000Z (объект Date)

// Преобразование объекта в JSON
const obj1 = { name: "Алексей", age: 30 };
const jsonString1 = JSON.stringify(obj1);
console.log(jsonString1); // {"name":"Алексей","age":30}
console.log(typeof jsonString1); // string

// Форматирование с отступами
const formattedJson = JSON.stringify(obj1, null, 2);
console.log(formattedJson);
/* Вывод:
{
  "name": "Алексей",
  "age": 30
}
*/

// Использование replacer для фильтрации свойств
const jsonFiltered = JSON.stringify(obj1, ['name']);
console.log(jsonFiltered); // {"name":"Алексей"}