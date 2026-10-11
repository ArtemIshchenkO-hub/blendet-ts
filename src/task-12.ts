// Завдання:

// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.

type Callback = (str: string) => void;

function sendDoneStatus(callback: Callback) {
  callback("done");
}

sendDoneStatus((str) => console.log(str));
