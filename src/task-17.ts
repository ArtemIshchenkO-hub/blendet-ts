// Функція fetchUsers повертає проміс, який через fetch отримує список користувачів з API.

interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    };
    phone: string;
    website: string;
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

const fetchUsers = async () : Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json() as User[];
  return data;
};

fetchUsers().then((users) => console.log(users));

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers.