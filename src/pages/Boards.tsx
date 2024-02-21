import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import CardItem from "../components/CardItem";
// import getAllToDo from "../services/DataService";
import { Cards } from "../services/Data";
import { useEffect, useState } from "react";
import { Flex } from "antd";
import { ICards } from "../services/Data"; 



export default function Boards(): JSX.Element {
  const [loading, setLoading] = useState(false);
  // const [cards, setCards] = useState([]);
  const [cards, setCards] = useState(Cards);


  const navigate = useNavigate();

  function handleClick() {
    navigate("/", { replace: true });
  }

  useEffect(() => {
    // const todos = getAllToDo();
    // todos.then((res) => {
    //   console.log(res);
    //   setCards(res);
    // });
   
  }, []);

  return (
    <div>
      <h1>Boards</h1>
      <Flex wrap="wrap" gap="small" justify="space-around" align="center">
        {loading && <p>Loading ... </p>}
        {!loading &&
          cards.map((card: ICards) => <CardItem card={card} key={card.userId} />)}
      </Flex>
      <MyButton onClick={handleClick}>На Главную</MyButton>
    </div>
  );
}
