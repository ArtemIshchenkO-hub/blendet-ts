// Функція fetchUsers повертає проміс, який через axios отримує список користувачів з API.

import axios from "axios";

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
  const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
  return response.data;
};

const getUsers = async (): Promise<void> => {
  const users = await fetchUsers();
  console.log(users);
};

getUsers();

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers.