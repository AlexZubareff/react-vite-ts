
//Получаем данные с сервера
export async function getAllTasks() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await response.json();
    console.log(result);
    return result;
  }

  //Получаем данные задач одного пользователя
export  async function getUserTask(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
  const result = await response.json();
  console.log(result);
  return result;
}