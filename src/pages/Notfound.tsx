import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";

export default function NotFound(): JSX.Element {
  const navigate = useNavigate();

    function handleClick() {
        navigate('/', { replace: true });
      }

    return(
        <div>
            <h3>Страница не найдена</h3>
        <MyButton onClick={handleClick}>На Главную</MyButton>

        </div>
    )
}