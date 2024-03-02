import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"; 
import { useSelector } from "react-redux";
import { TOKEN } from "../config/configAuth";


type User = {
    id: string;
    username: string;
    email: string;
    password: string;
    remember: boolean;
  }
  
  type userState = {
    user: User | null,
    isAuth: boolean ,
    error: string | null,
  }

  const initialState: userState = {
    user: null,
    isAuth: false,
    error: null,
  }


//   export const createUser = createAsyncThunk(
//     'user/createUser',
//     async function (regData, {rejectWithValue, dispatch}) {
//       try {

// const newUser: User = {
//     id: '23',
//     name: regData.username,
//     email: regData.email,
//     password: regData.password,
//     remember: regData.remember,
// }
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
//           method: 'POST',
//           body: JSON.stringify(newUser),
//           headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         });
//       console.log(response);
  
//         if (!response.ok) {
//           throw new Error('Невозможно удалить задачу!');
//         }
  


//         // dispatch(removeTask({id}));
//         const result = await response.json();
//         console.log(result);
//         dispatch(addUser({result}))
//         // return result;
        
        
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
  
//     }
//   );


  export const fetchAddUser = createAsyncThunk(
    'user/createUser',
    async function (regData, {rejectWithValue, dispatch}) {
      try {

const newUser: User = {
    id: '',
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
          throw new Error('Невозможно удалить задачу!');
        }
  


        const result = await response.json();
        console.log(result);
        dispatch(addUser({result}))
        
        
      } catch (error) {
        return rejectWithValue(error.message);
      }
  
    }
  );




//  export function auth () {

// const auth = useSelector(state => state.user)
// console.log(auth);

// }



  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      addUser(state, action) {
        state.user = action.payload;
        state.isAuth = true;
        console.log(state.user);
    },
      isUserAuth(state) {
        state.isAuth = true;
        
    },
      logaut(state){
        state.isAuth = false;
        console.log(state);
      },

    },
    
  })


  export const {addUser, isUserAuth, logaut} = userSlice.actions;
  export default userSlice.reducer;