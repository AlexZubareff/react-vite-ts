import { Card } from "antd";
import { ICards } from "../services/Data";
import TableTasks from "./TableTasks";



interface CardProps {
  card: ICards;
}

export default function CardItem({ card }: CardProps) {
  console.log("PROPS: ", card);
  return (

    <Card title={`UserID: ${card.userId}`} bordered={true} style={{ width: 500 }}>
      <TableTasks tasks={card.tasks} key={card.userId} />
    </Card>
  );
}
