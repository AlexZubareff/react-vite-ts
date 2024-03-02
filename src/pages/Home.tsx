import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import { Flex } from "antd";
import { useEffect } from "react";
import { useAuth } from "../hooks/authHook";
import { useDispatch } from "react-redux"; 
import { auth } from "../store/authSlice";
import { fetchTasksDummy } from "../store/taskSlice";


export default function Home(): any {
  const navigate = useNavigate();
  const {isAuth, data} = useAuth();

  console.log(data);

  const dispatch = useDispatch();
//   if(localStorage.getItem('token')) {
//   dispatch(auth(true));
//   dispatch(fetchTasksDummy(localStorage.getItem('token')));
//   navigate("/boards", { replace: true });
// }


  function handleClickRegistration() {
    navigate("/register", { replace: true });
  }

  function handleClickEnter() {
    navigate("/login", { replace: true });
  }
  // const token = localStorage.getItem('token')
  useEffect(()=>{
      if(localStorage.getItem('token')) {
      dispatch(auth(true));
      dispatch(fetchTasksDummy(localStorage.getItem('token')));
      navigate("/boards", { replace: true });
    }
  },[])
  

  return (
    <Flex style={{ minHeight: "500px" }} justify="center" align="center">
      <MyButton onClick={handleClickRegistration}>Зарегистрироваться</MyButton>
      <MyButton onClick={handleClickEnter}>Войти</MyButton>
    </Flex>
  );
}
