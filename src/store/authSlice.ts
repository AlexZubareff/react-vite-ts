import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Auth = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};

type User = {
  username: string;
  email: string;
  password: string;
  remember: boolean;
};

type userData = {
  username: string;
  password: string;
};

type authState = {
  data: Auth | {};
  status: string;
  isAuth: boolean;
  error: string | null;
  token: string | null;
};

export const fetchAuth = createAsyncThunk< authState, userData, { rejectValue: string }>("user/loginUser", async function (loginData, { rejectWithValue }) {
  // console.log(loginData.username);

  const loginUserData: userData = {
    username: loginData.username,
    password: loginData.password,
  };

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    body: JSON.stringify(loginUserData),
    headers: { "Content-Type": "application/json" },
  });
  // console.log(response);

  if (!response.ok) {
    return rejectWithValue("Неверные данные пользователя!");
  }

  const data = await response.json();
  console.log(data);
  return data;
});

export const fetchAuthMe = createAsyncThunk< authState, string, { rejectValue: string }>("user/AuthUser", async function (token, { rejectWithValue }) {
  // console.log(loginData.username);

  const response = await fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(response);

  if (!response.ok) {
    return rejectWithValue("Неверные данные пользователя!");
  }
  const data = await response.json();
  console.log(data);
  return data;
});

export const fetchRegister = createAsyncThunk< User, User, { rejectValue: string }>("user/createUser", async function (regData, { rejectWithValue }) {
  const newUser: User = {
    username: regData.username,
    email: regData.email,
    password: regData.password,
    remember: regData.remember,
  };
  const response = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
  if (!response.ok) {
    return rejectWithValue("Невозможно добавить пользователя!");
  }
  const result = await response.json();
  // console.log(result);
  return result;
});

const initialState: authState = {
  data: {},
  isAuth: false,
  status: "",
  error: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logaut(state) {
      state.data = {};
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.status = "resolved";
        state.data = action.payload;
        state.isAuth = true;
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = "rejected";
        state.error = null;
      })
      .addCase(fetchRegister.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = "resolved";
        state.data = action.payload;
        state.isAuth = false;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.status = "rejected";
        state.error = null;
      })
      .addCase(fetchAuthMe.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.status = "resolved";
        state.data = action.payload;
        state.isAuth = true;
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.status = "rejected";
        state.error = null;
      });
  },
});

export const { logaut } = authSlice.actions;
export default authSlice.reducer;
