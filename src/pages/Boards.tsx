import { useEffect } from "react";
import TableTasks from "../components/TableTasks";
import { useAuth } from "../hooks/authHook";
import { fetchTasksDummy } from "../store/taskSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function Boards(): JSX.Element {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  console.log(isAuth);

  const { status, error } = useAppSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasksDummy(localStorage.getItem("token")));
  }, []);

  

  return (
    <div>
      <h1>Tasks</h1>

      {status === "loading" && <p>Loading ... </p>}
      {error && <h2>{error}</h2>}
      <TableTasks />
      {/* <MyButton onClick={handleClick}>Home</MyButton> */}
    </div>
  );
}
