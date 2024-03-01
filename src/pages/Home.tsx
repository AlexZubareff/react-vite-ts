import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import { Flex } from "antd";
// import { TOKEN } from "../config/configAuth";
import { useEffect } from "react";
import { useAuth } from "../hooks/authHook";


export default function Home(): any {
  const navigate = useNavigate();
  const {isAuth} = useAuth();

  console.log(isAuth);
  
  function handleClickRegistration() {
    navigate("/register", { replace: true });
  }

  function handleClickEnter() {
    navigate("/login", { replace: true });
  }
  // const token = localStorage.getItem('token')
  useEffect(()=>{
    
    if (isAuth) {
      return navigate("/boards",  { replace: true });
      
  }
  },[])
  

  return (
    <Flex style={{ minHeight: "500px" }} justify="center" align="center">
      <MyButton onClick={handleClickRegistration}>Зарегистрироваться</MyButton>
      <MyButton onClick={handleClickEnter}>Войти</MyButton>
    </Flex>
  );
}
