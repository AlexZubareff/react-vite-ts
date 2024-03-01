import { Table, Space } from 'antd';
import type { TableProps } from 'antd';
// import { ITask } from '../services/DataInterfaces';
import MyButton from './MyButton';
import { useDispatch, useSelector } from 'react-redux';
// import { getUserTask } from '../services/DataService'; 
// import { FC } from 'react';
import { fetchUserTasks, deleteTask } from '../store/taskSlice'; 


// interface TasksProps {
//     // data: ITask[]
//     handleUserTask: (userId: string) => void,
//   }

  interface DataType {
    userId: string;
    id: string;
    title: string;
    completed: boolean;
  }


  // function handleClick() {
  //   console.log('delete task')
    
  // }

  // function handleUserTask(id:string) {
  //   getUserTask(id)
  //   console.log('get task User: ', id )
  // }S

  export default function TableTasks ()  { 
    // console.log(data);
    const data = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();

    const columns: TableProps<DataType>['columns'] = [
      {
        title: 'User ID',
        dataIndex: 'userId',
        key: 'userId',
        render: (userId) => <a onClick={()=>dispatch(fetchUserTasks(userId))}>{userId}</a>,
      },
        {
          title: 'Task ID',
          dataIndex: 'id',
          key: 'id',
          render: (id) => <a>{id}</a>,
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
          dataIndex: 'id',
          key: 'id',
          render: (id) => (
            <Space size="middle">
              <MyButton onClick={() => dispatch(deleteTask(id))}>Delete</MyButton>
            </Space>
          ),
        },
      ];

    
    return(
        <Table columns={columns} dataSource={data}/>
    )
    
};








