import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/userSlice";

const store: any = configureStore({
    reducer: {
        user: userSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
