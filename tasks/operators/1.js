// Входные данные для демонстрации
const a = 5;           // Число для побитовых операций
const b = 3;           // Число для побитовых операций
const truthy = "hello"; // Truthy значение
const falsy = 0;       // Falsy значение
const x = null;        // Для оператора ?? и других
const y = undefined;   // Для оператора ??
const obj = { value: 42 };
const emptyObj = {};

// Функция для вывода результата с описанием
const logResult = (operator, result, description) => {
  console.log(`${operator}: ${JSON.stringify(result)} — ${description}`);
};

// 1. Логический AND (&&) — возвращает первый falsy или последний truthy
logResult("&& (truthy && falsy)", truthy && falsy, "Возвращает 0, так как 0 — первый falsy");
logResult("&& (truthy && obj)", truthy && obj, "Возвращает obj, так как оба truthy");
logResult("&& (falsy && truthy)", falsy && truthy, "Возвращает 0, не вычисляет второе");

// 2. Логический OR (||) — возвращает первый truthy или последний falsy
logResult("|| (falsy || truthy)", falsy || truthy, "Возвращает 'hello', первый truthy");
logResult("|| (truthy || falsy)", truthy || falsy, "Возвращает 'hello', первый truthy");
logResult("|| (falsy || x)", falsy || x, "Возвращает null, последний falsy");

// 3. Nullish Coalescing (??) — возвращает первое не null/undefined
logResult("?? (x ?? y)", x ?? y, "Возвращает null, первое не undefined");
logResult("?? (falsy ?? x)", falsy ?? x, "Возвращает 0, так как 0 не null/undefined");
logResult("?? (truthy ?? x)", truthy ?? x, "Возвращает 'hello', первое не null/undefined");

// 4. Логический NOT (!) — инвертирует truthy/falsy
logResult("!truthy", !truthy, "Возвращает false, так как 'hello' — truthy");
logResult("!falsy", !falsy, "Возвращает true, так как 0 — falsy");
logResult("!!truthy", !!truthy, "Возвращает true, двойное отрицание приводит к Boolean");

// 5. Побитовый AND (&) — выполняет AND на битах чисел
logResult("& (a & b)", a & b, "5 & 3 = 1 (0101 & 0011 = 0001)");
logResult("& (a & 0)", a & 0, "5 & 0 = 0 (все биты сбрасываются)");
logResult("& (a & -1)", a & -1, "5 & -1 = 5 (все биты сохраняются)");

// 6. Побитовый OR (|) — выполняет OR на битах чисел
logResult("| (a | b)", a | b, "5 | 3 = 7 (0101 | 0011 = 0111)");
logResult("| (a | 0)", a | 0, "5 | 0 = 5 (биты не меняются)");
logResult("| (a | -1)", a | -1, "5 | -1 = -1 (все биты устанавливаются)");

// 7. Побитовый XOR (^) — выполняет XOR на битах чисел
logResult("^ (a ^ b)", a ^ b, "5 ^ 3 = 6 (0101 ^ 0011 = 0110)");
logResult("^ (a ^ a)", a ^ a, "5 ^ 5 = 0 (одинаковые биты дают 0)");
logResult("^ (a ^ 0)", a ^ 0, "5 ^ 0 = 5 (биты не меняются)");

// 8. Побитовый NOT (~) — инвертирует биты числа
logResult("~a", ~a, "~5 = -6 (инверсия 0101 = 1010, интерпретируется как -6)");
logResult("~0", ~0, "~0 = -1 (все биты инвертируются)");
logResult("~~a", ~~a, "~~5 = 5 (двойная инверсия возвращает исходное число)");

// 9. Левый сдвиг (<<) — сдвигает биты влево
logResult("<< (a << 1)", a << 1, "5 << 1 = 10 (0101 << 1 = 1010)");
logResult("<< (a << 2)", a << 2, "5 << 2 = 20 (0101 << 2 = 10100)");
logResult("<< (a << 0)", a << 0, "5 << 0 = 5 (без сдвига)");

// 10. Правый сдвиг со знаком (>>) — сдвигает биты вправо с сохранением знака
logResult(">> (a >> 1)", a >> 1, "5 >> 1 = 2 (0101 >> 1 = 0010)");
logResult(">> (-5 >> 1)", -5 >> 1, "-5 >> 1 = -3 (знаковый бит сохраняется)");
logResult(">> (a >> 0)", a >> 0, "5 >> 0 = 5 (без сдвига)");

// 11. Правый сдвиг без знака (>>>) — сдвигает биты вправо, заполняя нули
logResult(">>> (a >>> 1)", a >>> 1, "5 >>> 1 = 2 (0101 >>> 1 = 0010)");
logResult(">>> (-5 >>> 1)", -5 >>> 1, "-5 >>> 1 = 2147483646 (знаковый бит игнорируется)");
logResult(">>> (a >>> 0)", a >>> 0, "5 >>> 0 = 5 (без сдвига)");

// 12. Комбинированные примеры
logResult("&& с присваиванием", (obj.value = truthy && 100), "Присваивает 100, так как truthy — true");
logResult("|| с присваиванием", (emptyObj.value = falsy || 42), "Присваивает 42, так как falsy — false");
logResult("?? с присваиванием", (emptyObj.default = x ?? "default"), "Присваивает 'default', так как x — null");