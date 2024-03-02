import { configureStore } from "@reduxjs/toolkit"; 
import  taskReducer  from './taskSlice';
// import userReduser from './userSlice';
import authReduser from './authSlice';

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        // user: userReduser,
        auth: authReduser,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;