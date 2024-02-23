import { Table, Space } from 'antd';
import type { TableProps } from 'antd';
import { ITask } from '../services/DataInterfaces';
import MyButton from './MyButton';
// import { getUserTask } from '../services/DataService'; 
import { FC } from 'react';


interface TasksProps {
    data: ITask[]
    handleUserTask: FC
  }

  interface DataType {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }


  function handleClick() {
    console.log('delete task')
    
  }

  // function handleUserTask(id:string) {
  //   getUserTask(id)
  //   console.log('get task User: ', id )
  // }S

  export default function TableTasks ({data, handleUserTask}: TasksProps)  { 
    console.log(data);


    const columns: TableProps<DataType>['columns'] = [
      {
        title: 'User ID',
        dataIndex: 'userId',
        key: 'userId',
        render: (userId) => <a onClick={()=>handleUserTask(userId)}>{userId}</a>,
      },
        {
          title: 'Task ID',
          dataIndex: 'id',
          key: 'id',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Task title',
          dataIndex: 'title',
          key: 'title',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Task Copmleted',
          dataIndex: 'completed',
          key: 'completed',
          render: (completed) =>(<a>{completed ? "Yes" : "No" }</a>) ,
         
        },
        {
          title: 'Action',
          key: 'action',
          render: () => (
            <Space size="middle">
              <MyButton onClick={handleClick}>Delete</MyButton>
            </Space>
          ),
        },
      ];

    
    return(
        <Table columns={columns} dataSource={data}

         />
    )
    
};








