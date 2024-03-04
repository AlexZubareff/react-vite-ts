import { Table, Space } from "antd";
import type { TableProps } from "antd";
import MyButton from "./MyButton";
import { fetchUserTasks, fetchTask, fetchDeleteTask } from "../store/taskSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface DataType {
  id: string;
  todo: string;
  completed: boolean;
  userId: string;
}

export default function TableTasks() {
  const data = useAppSelector((state) => state.tasks);
  console.log("TODOS: ", data);

  const dispatch = useAppDispatch();

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
          <MyButton onClick={() => dispatch(fetchDeleteTask(id))}>Delete</MyButton>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data.todos} />;
}
