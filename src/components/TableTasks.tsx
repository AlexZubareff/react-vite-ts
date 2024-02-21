import { Table } from 'antd';
import type { TableProps } from 'antd';
import { ITask } from '../services/Data';


interface TasksProps {
    tasks: ITask[]
  }

  interface DataType {
    id: number;
    title: string;
    completed: string;
  }

  export default function TableTasks ({tasks}: TasksProps)  { 
    console.log(tasks);

    const columns: TableProps<DataType>['columns'] = [
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
          render: (text) => <a>{text}</a>,
         
        }
      ];

    
    return(
        <Table columns={columns} dataSource={tasks} />
    )
    
};







