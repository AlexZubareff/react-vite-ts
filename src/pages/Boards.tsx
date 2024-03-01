import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
// import {getAllTasks, getUserTask} from "../services/DataService";
import { useEffect } from "react";
import TableTasks from "../components/TableTasks";
import { fetchTasks } from "../store/taskSlice"; 
import { useDispatch, useSelector } from "react-redux"; 
import { selectIsAuth } from "../store/authSlice";
import { useAuth } from "../hooks/authHook";

// import { ITask } from "../services/DataInterfaces";

export default function Boards(): JSX.Element {

 


  // const {isAuth} = useSelector(state => state.auth);

  const {isAuth, data} = useAuth();
 
  const dispatch = useDispatch();

  const navigate = useNavigate();
console.log(data);


  const {status, error} = useSelector(state => state.tasks);
console.log(status, error);

  // function handleClick() {
  //   navigate("/", { replace: true });
  // }

  if(!isAuth){
    navigate("/login", { replace: true });
  }

  // useEffect(() => {
  //   if(!isAuth){
  //     navigate("/login", { replace: true });
  //   }
  // }, [isAuth]);


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

      {status === 'loading' && <p>Loading ... </p>}
      {error && <h2>{error}</h2>}
      <TableTasks/>
      {/* <MyButton onClick={handleClick}>Home</MyButton> */}
    </div>
  );
}
