import { Card } from "antd";

interface ICard {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface CardProps {
  card: ICard;
}

export default function CardItem({ card }: CardProps) {
  console.log("PROPS: ", card.completed);
  return (
    <Card title={card.title} bordered={true} style={{ width: 300 }}>
      <p>Task ID: {card.id}</p>
      <p>User ID: {card.userId}</p>
      <p>Сompleted: {card.completed ? "Yes" : "NO"}</p>
    </Card>
  );
}
