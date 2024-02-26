export interface ITask {
    id: string;
    title: string;
    completed: boolean;
    userId: string;
  }
  
  export interface ITasks {
    tasks: ITask[];
  }