import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import {getAllTasks, getUserTask} from "../services/DataService";
import { useEffect, useState } from "react";
import TableTasks from "../components/TableTasks";
import { ITask } from "../services/DataInterfaces";

export default function Boards(): JSX.Element {
  const [loading, setLoading] = useState(false);
  // const [cards, setCards] = useState([]);
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/", { replace: true });
  }

  useEffect(() => {
    setLoading(true);
    const tasks = getAllTasks();
    tasks.then((res) => {
      console.log(res);
      setTasks(res);
      setLoading(false);
    });
  }, []);

  function handleUserTask(id:string): any {
    setLoading(true);
    const userTask = getUserTask(id)

    userTask.then((res) => {
      console.log(res);
      setTasks(res);
      setLoading(false);
    });
    console.log('get task User: ', id )
  }

  // useEffect(() => {
  //   setLoading(true);
  //   handleUserTask()
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <div>
      <h1>Tasks</h1>

      {loading && <p>Loading ... </p>}
      {!loading && <TableTasks data={tasks} handleUserTask={handleUserTask}/>}
      <MyButton onClick={handleClick}>Home</MyButton>
    </div>
  );
}
