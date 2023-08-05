import { createSlice } from "@reduxjs/toolkit"
import { actions } from "./todoReducer";

const initialState = {
    message: ""
}

const notificationSlice = createSlice({
    name:"notification",
    initialState,
    reducers: {
        reset : (state, action)=>{
            state.message = "";
        }
    },
    // extraReducers: {
        // "todo/add" : (state, action) => {
        //     state.message = "TODO has been created";
        // },
        // "medicine/toggle" : (state, action) => {
        //     state.message = "Medicine has been taken";
        // }
    // }

    extraReducers: (builder) => {
        builder.addCase(actions.add, (state, action) => {
                 state.message = "TODO has been created"});  
        }
})

export const notificationReducer = notificationSlice.reducer;
export const notificationReset = notificationSlice.actions.reset;
export const notificationSelector = (state) => state.notificationReducer.message;