// написать функцию, либо последовательность операций, которая вернет результат следующих условий
// результат есть строка из сконкатенированных value элементов коллекции, расположенных в обратном порядке символов,
// результат собирается только из непросроченных записей и конкатенируется в порядке возрастания order
// результат не содержит одинаковых символов

function processCollection(input) {
  // 1. Фильтруем непросроченные записи
  const validItems = input.filter(item => !item.expired);

  // 2. Сортируем по order
  const sortedItems = validItems.sort((a, b) => a.order - b.order);

  // 3. Инвертируем value для каждого элемента
  const reversedValues = sortedItems.map(item => item.value.split('').reverse().join(''));

  // 4. Собираем строку из всех reversedValues
  let result = reversedValues.join('');

  // 5. Удаляем дубликаты, сохраняя порядок
  const uniqueChars = [];
  for (const char of result) {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  }
  return uniqueChars.join('');
}

// Тест
const input = [
  { value: "abcd", order: 4, expired: false },
  { value: "qwer", order: 2, expired: true },
  { value: "xyz1", order: 1, expired: false },
  { value: "abx2", order: 3, expired: false },
];

console.log(processCollection(input)); // "1zyx2badc"

// очень крутая задача, показывает умение применять основные методы массивов