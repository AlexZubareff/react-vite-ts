import { Table, Space } from "antd";
import type { TableProps } from "antd";
import MyButton from "./MyButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserTasks, deleteTask, fetchTask } from "../store/taskSlice";

interface DataType {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export default function TableTasks() {
  const data = useSelector((state) => state.tasks);
  console.log("TODOS: ", data);

  const dispatch = useDispatch();

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
      render: (userId) => (
        <a onClick={() => dispatch(fetchUserTasks(userId))}>{userId}</a>
      ),
    },
    {
      title: "Task ID",
      dataIndex: "id",
      key: "id",
      render: (id) => <a onClick={() => dispatch(fetchTask(id))}>{id}</a>,
    },
    {
      title: "Task title",
      dataIndex: "todo",
      key: "todo",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Task Copmleted",
      dataIndex: "completed",
      key: "completed",
      render: (completed) => <a>{completed ? "Yes" : "No"}</a>,
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <Space size="middle">
          <MyButton onClick={() => dispatch(deleteTask(id))}>Delete</MyButton>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data.todos} />;
}
