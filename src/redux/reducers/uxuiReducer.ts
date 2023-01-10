import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const uxuiReducer = createSlice({
    name: 'uxuiReducer',
    initialState: {
        loading: true,
        statusModal: {
            state: 'hidden', // 0:hidden, 1: success, 2: failed
            title: "",
            content: "",
            trigger: ""
        }
    },
    reducers: {
        startLoading: (state, action) => {
            state.loading = true
        },
        endLoading: (state, action) => {
            state.loading = false;
        },
    },
    extraReducers: (builder) => {
    }
})

export default uxuiReducer;

export const uxuiReducerAction = uxuiReducer.actions