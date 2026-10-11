// Функція fetchMessage повертає проміс, який повертає рядок.
// Завдання:

// Додайте до функції явну типізацію, яка вказує, що вона повертає проміс який приводиться до рядка.
// Переконайтеся, що якщо message має тип відмінний від рядка, то виникає помилка.

function fetchMessage(): Promise<string> {
  return new Promise((resolve) => {
    resolve("Hello from server!");
  });
}

fetchMessage().then((message) => console.log(message));
