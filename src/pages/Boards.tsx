import { useNavigate } from "react-router-dom";
// import MyButton from "../components/MyButton";
import { useEffect } from "react";
import TableTasks from "../components/TableTasks";
import { useSelector } from "react-redux";
import { useAuth } from "../hooks/authHook";

export default function Boards(): JSX.Element {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  console.log(isAuth);

  const { status, error } = useSelector((state) => state.tasks);
  // console.log(status, error);

  // function handleClick() {
  //   navigate("/", { replace: true });
  // }

  useEffect(() => {
    if (!isAuth) {
      navigate("/login", { replace: true });
    }
  }, [isAuth]);

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
