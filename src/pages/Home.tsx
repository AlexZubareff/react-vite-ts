import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";

export default function Home(): any {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/register", { replace: true });
  }

  return <MyButton onClick={handleClick}>Зарегистрироваться</MyButton>;
}
