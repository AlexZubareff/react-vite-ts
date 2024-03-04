import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";

type Task = {
  id: string;
  todo: string;
  completed: boolean;
  userId: string;
};

type TasksState = {
  todos: Task[];
  status: string | null;
  error: string | null;
  limit: number;
  skip: number;
  total: number;
};

const initialState: TasksState = {
  todos: [],
  status: null,
  error: null,
  limit: 0,
  skip: 0,
  total: 0,
};

// Получение всех задач DUMMYJSON с авторизацией
export const fetchTasksDummy = createAsyncThunk< TasksState, string, { rejectValue: string }>(
  "tasks/fetchTasks", 
  async function (token, { rejectWithValue }) {
  const response = await fetch("https://dummyjson.com/auth/todos", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    return rejectWithValue("Ошибка Сервера!");
  }

  const result = await response.json();
  console.log(result);
  return result;
});

// Получение одной задачи, не реализовано
export const fetchTask = createAsyncThunk<Task, string, { rejectValue: string }>(
  "tasks/fetchTask", 
  async function (id, { rejectWithValue }) {
  const response = await fetch(`https://dummyjson.com/todos/${id}`);

  if (!response.ok) {
    return rejectWithValue("Ошибка Сервера!");
  }

  const result = await response.json();
  console.log(result);
  return result;
});

// Удаление задачи
export const fetchDeleteTask = createAsyncThunk< string, string, { rejectValue: string }>("tasks/deleteTask", async function (id, { rejectWithValue }) {
  const response = await fetch(`https://dummyjson.com/todos/${id}`, {
    method: "DELETE",
  });
  // console.log(response);

  if (!response.ok) {
    return rejectWithValue("Невозможно удалить задачу!");
  }
  return id;
});

// Получение задач пользователя
export const fetchUserTasks = createAsyncThunk< TasksState, string, { rejectValue: string }>("tasks/fetchUserTasks", async function (id, { rejectWithValue }) {
  const response = await fetch(`https://dummyjson.com/users/${id}/todos`);

  if (!response.ok) {
    return rejectWithValue("Ошибка Сервера!");
  }

  const result = await response.json();
  console.log(result);
  return result;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksDummy.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchTasksDummy.fulfilled,
        (state, action: PayloadAction<TasksState>) => {
          state.status = "resolved";
          state.todos = action.payload.todos;
          state.limit = action.payload.limit;
          state.total = action.payload.total;
          state.skip = action.payload.skip;
        }
      )
      .addCase(fetchTasksDummy.rejected, (state) => {
        state.status = "rejected";
      })
      // .addCase(fetchTask.pending, (state) => {
      //   state.status = 'loading';
      //   state.error = null;
      // })
      // .addCase(fetchTask.fulfilled, (state, action) => {
      //   state.status = 'resolved';
      //   state.todos = action.payload.todos;
      //   state.limit = action.payload.limit;
      //   state.total = action.payload.total;
      //   state.skip = action.payload.skip;
      // })
      // .addCase(fetchTask.rejected, (state) => {
      //   state.status = 'rejected';
      // })
      .addCase(fetchUserTasks.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchUserTasks.fulfilled,
        (state, action: PayloadAction<TasksState>) => {
          state.status = "resolved";
          state.todos = action.payload.todos;
          state.limit = action.payload.limit;
          state.total = action.payload.total;
          state.skip = action.payload.skip;
        }
      )
      .addCase(fetchUserTasks.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchDeleteTask.fulfilled, (state, action) => {
        state.status = "resolved";
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(fetchDeleteTask.rejected, (state) => {
        state.status = "rejected";
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = "rejected";
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
// export const {removeTask} = taskSlice.actions;
export default taskSlice.reducer;
