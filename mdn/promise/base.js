/**
 * Файл с задачами для изучения основ промисов в JavaScript.
 * Охватывает объявление, вызов, цепочки, обработку ошибок и статические методы.
 * Каждая задача сопровождается комментарием с объяснением.
 * Для проверки результата запустите файл в Node.js или браузере (консоль).
 */

// Задача 1: Создание промиса и базовая обработка
// Создайте промис, который разрешается через 1 секунду с сообщением "Успех!"
console.log("Задача 1:");
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Успех!");
  }, 1000);
});

promise1.then((result) => {
  console.log(result); // Ожидаемый вывод: Успех!
}).catch((error) => {
  console.error("Ошибка:", error);
});

// Задача 2: Обработка ошибки в промисе
// Создайте промис, который отклоняется с ошибкой через 1 секунду
console.log("Задача 2:");
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Что-то пошло не так!"));
  }, 1000);
});

promise2.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error("Ошибка:", error.message); // Ожидаемый вывод: Что-то пошло не так!
});

// Задача 3: Цепочка промисов
// Создайте цепочку промисов, где каждый следующий промис увеличивает результат на 10
console.log("Задача 3:");
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

promise3
  .then((result) => {
    console.log("Первый результат:", result); // 10
    return result + 10;
  })
  .then((result) => {
    console.log("Второй результат:", result); // 20
    return result + 10;
  })
  .then((result) => {
    console.log("Третий результат:", result); // 30
  });

// Задача 4: Промис с возвратом другого промиса
// Создайте промис, который возвращает другой промис
console.log("Задача 4:");
const promise4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Первый промис");
  }, 1000);
});

promise4
  .then((result) => {
    console.log(result); // Первый промис
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Второй промис");
      }, 1000);
    });
  })
  .then((result) => {
    console.log(result); // Второй промис
  });

// Задача 5: Использование Promise.resolve
// Создайте промис с помощью Promise.resolve и обработайте результат
console.log("Задача 5:");
const promise5 = Promise.resolve("Мгновенный успех!");

promise5.then((result) => {
  console.log(result); // Ожидаемый вывод: Мгновенный успех!
});

// Задача 6: Использование Promise.reject
// Создайте промис с помощью Promise.reject и обработайте ошибку
console.log("Задача 6:");
const promise6 = Promise.reject(new Error("Мгновенная ошибка!"));

promise6.catch((error) => {
  console.error("Ошибка:", error.message); // Ожидаемый вывод: Мгновенная ошибка!
});

// Задача 7: Promise.all
// Используйте Promise.all для выполнения нескольких промисов параллельно
console.log("Задача 7:");
const promise7a = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise7b = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise7c = new Promise((resolve) => setTimeout(() => resolve(3), 500));

Promise.all([promise7a, promise7b, promise7c]).then((results) => {
  console.log("Результаты Promise.all:", results); // Ожидаемый вывод: [1, 2, 3]
});

// Задача 8: Promise.all с ошибкой
// Проверьте, как Promise.all обрабатывает ошибку в одном из промисов
console.log("Задача 8:");
const promise8a = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise8b = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("Ошибка в promise8b!")), 500)
);
const promise8c = new Promise((resolve) => setTimeout(() => resolve(3), 2000));

Promise.all([promise8a, promise8b, promise8c])
  .then((results) => {
    console.log("Результаты:", results);
  })
  .catch((error) => {
    console.error("Ошибка в Promise.all:", error.message); // Ожидаемый вывод: Ошибка в promise8b!
  });

// Задача 9: Promise.race
// Используйте Promise.race, чтобы получить результат самого быстрого промиса
console.log("Задача 9:");
const promise9a = new Promise((resolve) => setTimeout(() => resolve("Быстрый"), 500));
const promise9b = new Promise((resolve) => setTimeout(() => resolve("Медленный"), 1000));

Promise.race([promise9a, promise9b]).then((result) => {
  console.log("Результат Promise.race:", result); // Ожидаемый вывод: Быстрый
});

// Задача 10: Promise.any
// Используйте Promise.any, чтобы получить первый успешно разрешённый промис
console.log("Задача 10:");
const promise10a = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("Ошибка 1")), 1000)
);
const promise10b = new Promise((resolve) => setTimeout(() => resolve("Успех 2"), 2000));
const promise10c = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("Ошибка 3")), 500)
);

Promise.any([promise10a, promise10b, promise10c]).then((result) => {
  console.log("Результат Promise.any:", result); // Ожидаемый вывод: Успех 2
});

// Задача 11: Promise.allSettled
// Используйте Promise.allSettled, чтобы получить статус всех промисов
console.log("Задача 11:");
const promise11a = new Promise((resolve) => setTimeout(() => resolve("Успех 1"), 1000));
const promise11b = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("Ошибка 2")), 500)
);
const promise11c = new Promise((resolve) => setTimeout(() => resolve("Успех 3"), 2000));

Promise.allSettled([promise11a, promise11b, promise11c]).then((results) => {
  console.log("Результаты Promise.allSettled:");
  results.forEach((result, index) => {
    console.log(`Промис ${index + 1}:`, result);
  });
  // Ожидаемый вывод:
  // Промис 1: { status: 'fulfilled', value: 'Успех 1' }
  // Промис 2: { status: 'rejected', reason: Error: Ошибка 2 }
  // Промис 3: { status: 'fulfilled', value: 'Успех 3' }
});

// Задача 12: Асинхронная функция с промисами
// Создайте асинхронную функцию, которая использует await для обработки промисов
console.log("Задача 12:");
async function asyncExample() {
  try {
    const result1 = await new Promise((resolve) =>
      setTimeout(() => resolve("Первый результат"), 1000)
    );
    console.log(result1); // Первый результат

    const result2 = await new Promise((resolve) =>
      setTimeout(() => resolve("Второй результат"), 500)
    );
    console.log(result2); // Второй результат
  } catch (error) {
    console.error("Ошибка:", error.message);
  }
}

asyncExample();

// Задача 13: Обработка ошибок в async/await
// Создайте асинхронную функцию, которая обрабатывает ошибку
console.log("Задача 13:");
async function asyncWithError() {
  try {
    const result = await new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Ошибка в async!")), 1000)
    );
    console.log(result);
  } catch (error) {
    console.error("Ошибка в asyncWithError:", error.message); // Ожидаемый вывод: Ошибка в async!
  }
}

asyncWithError();

// Задача 14: Промис с finally
// Используйте .finally для выполнения кода независимо от результата промиса
console.log("Задача 14:");
const promise14 = new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() > 0.5 ? resolve("Успех!") : reject(new Error("Не повезло!"));
  }, 1000);
});

promise14
  .then((result) => {
    console.log("Результат:", result);
  })
  .catch((error) => {
    console.error("Ошибка:", error.message);
  })
  .finally(() => {
    console.log("Промис завершён!"); // Выполнится в любом случае
  });

// Задача 15: Промис с setTimeout для имитации асинхронной операции
// Создайте функцию, возвращающую промис, который имитирует загрузку данных
console.log("Задача 15:");
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "Пример данных" };
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log("Полученные данные:", data); // Ожидаемый вывод: { id: 1, name: 'Пример данных' }
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });

  /**
 * Дополнение к файлу promises_basics.js.
 * Содержит задачи, демонстрирующие работу со статусами промисов (pending, fulfilled, rejected).
 * Каждая задача сопровождается комментарием с объяснением.
 * Для проверки результата запустите файл в Node.js или браузере (консоль).
 */

// Задача 15: Промис с  промисов
// Используйте Promise.allSettled для отслеживания статуса нескольких промисов
console.log("Задача 15:");
const promise17a = new Promise((resolve) => setTimeout(() => resolve("Успех A"), 1000));
const promise17b = new Promise((_, reject) => setTimeout(() => reject(new Error("Ошибка B")), 500));
const promise17c = new Promise((resolve) => setTimeout(() => resolve("Успех C"), 1500));

Promise.allSettled([promise17a, promise17b, promise17c]).then((results) => {
  console.log("Статусы промисов в Promise.allSettled:");
  results.forEach((result, index) => {
    console.log(`Промис ${index + 1}:`, result.status, result.status === "fulfilled" ? result.value : result.reason.message);
  });
  // Ожидаемый вывод:
  // Промис 1: fulfilled Успех A
  // Промис 2: rejected Ошибка B
  // Промис 3: fulfilled Успех C
});
