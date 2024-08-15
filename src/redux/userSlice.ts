// src/redux/userSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define the type for the initial state
interface UserState {
    isLoading: boolean;
    data: any[];
    isError: boolean;
}

// Initial state
const initialState: UserState = {
    isLoading: false,
    data: [],
    isError: false,
};

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk("userdetail", async () => {
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    };
    try {
        const response = await axios.get("http://localhost:8080/user/getalluser", config);
        console.log("response ===> ", response)
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
});

// Create a slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearSignUpData: (state) => {
            state.data = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.isError = false;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Export the action
export const { clearSignUpData } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
