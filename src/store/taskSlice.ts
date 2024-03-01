import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"; 
// import { getAllTasks, getTaskById } from "../services/DataService"; 


type Task = {
    id: string;
    todo: string;
    completed: boolean;
    userId: string;
  }
  
  type TasksState = {
    tasks: Task[],
    status: string | null,
    error: string | null,
  }

  const initialState: TasksState = {
    tasks: [],
    status: null,
    error: null,
  }

// Получение всех задач JSONPlaceholder
  export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async function (_, { rejectWithValue }) {
      try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);

      if (!response.ok) {
        throw new Error('Ошибка Сервера!');
      }

      const result = await response.json();
      console.log(result);
      return result;
      
      } catch (error: any) {
        return rejectWithValue(error.message);
      }

    }
  );

// Получение всех задач DUMMYJSON с авторизацией
export const fetchTasksDummy = createAsyncThunk(
  'tasks/fetchTasks',
  async function (_, { rejectWithValue }) {
    try {
    const response = await fetch('https://dummyjson.com/auth/todos', {
      method: 'GET', /* or POST/PUT/PATCH/DELETE */
      headers: {
        'Authorization': 'Bearer /* YOUR_TOKEN_HERE */', 
        'Content-Type': 'application/json'
      }, 
    })
    // .then(response => response.json())
    // .then(console.log);

    // if (!response.ok) {
    //   throw new Error('Ошибка Сервера!');
    // }

    const result = await response.json();
    console.log(result);
    // return result;
    
    } catch (error: any) {
      return rejectWithValue(error.message);
    }

  }
);


// Получение одной задачи
export const fetchTask = createAsyncThunk(
  'tasks/fetchTask',
  async function (id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const result = await response.json();
      console.log(result);
      return result;
      
    } catch (error) {
      
    }

  }
);


// Удаление задачи
export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async function (id, {rejectWithValue, dispatch}) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      });
    console.log(response);

      if (!response.ok) {
        throw new Error('Невозможно удалить задачу!');
      }

      dispatch(removeTask({id}));
      // const result = await response.json();
      // console.log(result);
      // return result;
      
    } catch (error) {
      return rejectWithValue(error.message);
    }

  }
);

// Получение задач пользователя
export const fetchUserTasks = createAsyncThunk(
  'tasks/fetchUserTasks',
  async function (id, {rejectWithValue}) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
      const result = await response.json();
      console.log(result);
      return result;
      
    } catch (error) {
      return rejectWithValue(error.message)
    }

  }
);


  const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
      removeTask(state, action) {
        state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        console.log(state.tasks);
        
      }

    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(fetchTask.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.tasks = action.payload;
      })
      .addCase(fetchTask.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(fetchUserTasks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUserTasks.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.tasks = action.payload;
      })
      .addCase(fetchUserTasks.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
    }
  })


  export const {removeTask} = taskSlice.actions;
  export default taskSlice.reducer;