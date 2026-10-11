// Функція fetchProfile повертає проміс, який через затримку повертає профіль користувача.

// Профіль має такі поля:

// username - рядок
// age - число
// isAdmin - boolean


interface Profile {
    username: string;
    age: number;
    isAdmin: boolean;
}


function fetchProfile(): Promise<Profile> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ username: "max_123", age: 28, isAdmin: true });
    }, 1000);
  });
}

fetchProfile().then(profile => console.log(profile));

// Завдання:

// Оголосіть інтерфейс Profile.
// Додайте до функції явну типізацію, що вона повертає проміс, який приводиться до об'єкта профілю.