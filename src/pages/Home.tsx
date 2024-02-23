import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import { Flex } from "antd";

export default function Home(): any {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/register", { replace: true });
  }

  return (
    <Flex style={{ minHeight: "500px" }} justify="center" align="center">
      <MyButton onClick={handleClick}>Зарегистрироваться</MyButton>
    </Flex>
  );
}
