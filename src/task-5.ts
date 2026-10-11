interface User {
  name: string;
  age: number;
}

type FuncReturn = User & { isAdmin: boolean };

// type FuncReturn = User & { isAdmin: boolean };

// interface FuncReturn extends User {
//   isAdmin: boolean;
// }

// interface User {
//   email: string;
// }

function createUser({ name, age }: User): FuncReturn {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: 'Alice', age: 30 });

// Завдання:

// Типізуйте функцію повністю: параметри і повернення функції.
