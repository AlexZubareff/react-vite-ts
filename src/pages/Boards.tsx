import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import {getAllTasks, getUserTask} from "../services/DataService";
import { useEffect, useState } from "react";
import TableTasks from "../components/TableTasks";
import { fetchTasks, fetchUserTasks } from "../store/taskSlice"; 
import { useDispatch, useSelector } from "react-redux"; 
// import { ITask } from "../services/DataInterfaces";

export default function Boards(): JSX.Element {
  const [loading, setLoading] = useState(false);
  // const [cards, setCards] = useState([]);
  // const [tasks, setTasks] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const tasks = useSelector(state => state.tasks.tasks);

  function handleClick() {
    navigate("/", { replace: true });
  }

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  // useEffect(() => {
  //   dispatch(fetchUserTasks(id));
  // }, [id]);


  // useEffect(() => {
  //   setLoading(true);
  //   const tasks = getAllTasks();
  //   tasks.then((res) => {
  //     console.log(res);
  //     setTasks(res);
  //     setLoading(false);
  //   });
  // }, []);

  // function handleUserTask(id: string): any  {
  //   setLoading(true);
  //   const userTask = getUserTask(id)

  //   userTask.then((res) => {
  //     console.log(res);
  //     setTasks(res);
  //     setLoading(false);
  //   });
  //   console.log('get task User: ', id )
  // }

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
      {!loading && <TableTasks/>}
      <MyButton onClick={handleClick}>Home</MyButton>
    </div>
  );
}
