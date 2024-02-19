import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import CardItem from "../components/CardItem";
import getAllToDo from "../services/DataService";
import { useEffect, useState } from "react";
import { Flex } from "antd";

interface ICard {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Boards(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/", { replace: true });
  }

  useEffect(() => {
    const todos = getAllToDo();
    todos.then((res) => {
      console.log(res);
      setCards(res);
    });
  }, []);

  return (
    <div>
      <h3>Boards</h3>
      <MyButton onClick={handleClick}>На Главную</MyButton>

      <Flex wrap="wrap" gap="small" justify="space-between" align="center">
        {loading && <p>Loading ... </p>}
        {!loading &&
          cards.map((card: ICard) => <CardItem card={card} key={card.id} />)}
      </Flex>
    </div>
  );
}
