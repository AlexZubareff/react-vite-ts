
//Получаем данные с сервера
export async function getAllTasks() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    // const response = await fetch("https://dummyjson.com/todos");

    const result = await response.json();
    console.log(result);
    return result;
  }

  //Получаем данные с сервера
export async function getTaskById(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  // const response = await fetch("https://dummyjson.com/todos");

  const result = await response.json();
  console.log(result);
  return result;
}


  //Получаем данные задач одного пользователя
export  async function getUserTask(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
  // const response = await fetch(`https://dummyjson.com/todos/${id}`);

  const result = await response.json();
  console.log(result);
  return result;
}

  //Получаем всех пользователей
  export  async function getAllUsers() {
    // const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
    const response = await fetch(`https://dummyjson.com/users`);
  
    const result = await response.json();
    console.log(result);
    return result;
  }