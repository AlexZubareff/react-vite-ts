
//Получаем данные с сервера
export default async function getAllToDo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await response.json();
    // console.log(result);
    return result;
  }