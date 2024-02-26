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

// Получение всех задач
  export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async function (_, { rejectWithValue }) {
      try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const result = await response.json();
      console.log(result);
      return result;
      
      } catch (error) {
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
    }
  })


  export const {} = taskSlice.actions;
  export default taskSlice.reducer;