import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"; 
// import { useSelector } from "react-redux";
// import { TOKEN } from "../config/configAuth";


type Auth = {
   
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
    token: string,
  }


  type User = {
   
    username: string,
    email: string,
    password: string,
    remember: boolean,

  }
  
  
  type userData = {
 
    username: string;
   
    password: string;
   
  }
  

  type authState = {
    data: Auth | {},
    status: string,
    isAuth: boolean ,
    error: string | null,
  }




  export const fetchAuth = createAsyncThunk(
    'user/loginUser',
    async function (loginData: userData, {rejectWithValue}) {
      try {
console.log(loginData.username);


const loginUserData: userData = {
    username: loginData.username,
    password: loginData.password,
    
}

        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            body: JSON.stringify(loginUserData),
            headers: { 'Content-Type': 'application/json' }
        })
      console.log(response);
  
        if (!response.ok) {
          throw new Error('Неверные данные пользователя!');
        }
  


        const data = await response.json();
        console.log(data);

        return data;
        
      } catch (error) {
        return rejectWithValue(error.message);
      }
  
    }
  );


  export const fetchRegister = createAsyncThunk(
    'user/createUser',
    async function (regData: User, {rejectWithValue, dispatch}) {
      try {

const newUser: User = {
    
    username: regData.username,
    email: regData.email,
    password: regData.password,
    remember: regData.remember,
}
const response = await fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newUser)
})
// .then(res => res.json())
// .then(console.log);


      // console.log(response);
  
        if (!response.ok) {
          throw new Error('Невозможно добавить пользователя!');
        }
  


        const result = await response.json();
        console.log(result);
        dispatch(register(result))
        
        
      } catch (error) {
        return rejectWithValue(error.message);
      }
  
    }
  );



//   export const authUser = createAsyncThunk(
//     'user/authUser',
//     async function (token, {rejectWithValue, dispatch}) {
//       try {
// console.log(token);



//         const response = await fetch('https://dummyjson.com/auth/me', {
//             method: 'GET',
            
//             headers: { 'Authorization': `Bearer ${token}`,  }
//         })
//       console.log(response);
  
//         if (!response.ok) {
//           throw new Error('Невозможно удалить задачу!');
//         }
  


//         const data = await response.json();
//         console.log(data);
//             return data;
//         // dispatch(auth({data}))
        
        
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
  
//     }
//   );

//  export function auth () {

// const auth = useSelector(state => state.user)
// console.log(auth);

// }


const initialState: authState = {
    data: {},
    isAuth: false,
    status: '',
    error: null,
  }


  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      register(state, action) {
        state.data = action.payload;
        state.isAuth = false;

    },
      auth(state, action) {
        state.isAuth = action.payload;
        
    },
      logaut(state){
        state.data = {};
        state.isAuth = false;
        },

    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.data = action.payload;
        state.isAuth = true;
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = 'rejected';
        state.error = null;
      })
    }
  })

  
  // export const selectIsAuth = (state) => Boolean(state.auth.data);
  
  export const { logaut, auth, register} = authSlice.actions;
  export default authSlice.reducer;