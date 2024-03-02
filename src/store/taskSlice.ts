import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"; 
// import { getAllTasks, getTaskById } from "../services/DataService"; 




// Получение всех задач JSONPlaceholder
  // export const fetchTasks = createAsyncThunk(
  //   'tasks/fetchTasks',
  //   async function (_, { rejectWithValue }) {
  //     try {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);

  //     if (!response.ok) {
  //       throw new Error('Ошибка Сервера!');
  //     }

  //     const result = await response.json();
  //     console.log(result);
  //     return result;
      
  //     } catch (error: any) {
  //       return rejectWithValue(error.message);
  //     }

  //   }
  // );

// Получение всех задач DUMMYJSON с авторизацией
export const fetchTasksDummy = createAsyncThunk(
  'tasks/fetchTasks',
  async function (token, { rejectWithValue }) {
    try {
    const response = await fetch('https://dummyjson.com/auth/todos', {
      method: 'GET', /* or POST/PUT/PATCH/DELETE */
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      }, 
    })
    // .then(response => response.json())
    // .then(console.log);

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

// Получение одной задачи
export const fetchTask = createAsyncThunk(
  'tasks/fetchTask',
  async function (id) {
    try {
      const response = await fetch(`https://dummyjson.com/todos/${id}`);
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
      const response = await fetch(`https://dummyjson.com/todos/${id}`, {
        method: 'DELETE',
      });
    // console.log(response);

      if (!response.ok) {
        throw new Error('Невозможно удалить задачу!');
      }

      dispatch(removeTask({id}));
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
      const response = await fetch(`https://dummyjson.com/users/${id}/todos`)
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);


type Task = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

type TasksState = {
  todos: Task[],
  status: string | null,
  error: string | null,
  limit: number,
  skip: number,
  total: number,
}

const initialState: TasksState = {
  todos: [],
  status: null,
  error: null,
  limit: 0,
  skip: 0,
  total: 0,
}

  const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
      removeTask(state, action) {
        state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        console.log(state.todos);
        
      }

    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchTasksDummy.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTasksDummy.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.todos = action.payload.todos;
        state.limit = action.payload.limit;
        state.total = action.payload.total;
        state.skip = action.payload.skip;
      })
      .addCase(fetchTasksDummy.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(fetchTask.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.todos = action.payload.todos;
        state.limit = action.payload.limit;
        state.total = action.payload.total;
        state.skip = action.payload.skip;
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
        state.todos = action.payload.todos;
        state.limit = action.payload.limit;
        state.total = action.payload.total;
        state.skip = action.payload.skip;
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