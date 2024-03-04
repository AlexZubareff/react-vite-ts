import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import { Flex } from "antd";


export default function Home(): JSX.Element {
  const navigate = useNavigate();

  function handleClickRegistration() {
    navigate("/register", { replace: true });
  }

  function handleClickEnter() {
    navigate("/login", { replace: true });
  }

  return (
    <Flex style={{ minHeight: "500px" }} justify="center" align="center">
      <MyButton onClick={handleClickRegistration}>Зарегистрироваться</MyButton>
      <MyButton onClick={handleClickEnter}>Войти</MyButton>
    </Flex>
  );
}
