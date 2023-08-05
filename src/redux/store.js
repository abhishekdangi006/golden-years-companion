// import * as redux from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { routineReducer } from "./reducers/routineReducer";
import { medicineReducer } from "./reducers/medicineReducer";
import { notificationReducer } from "./reducers/notificationReducer";
import { configureStore } from "@reduxjs/toolkit";

// export const store = redux.createStore(todoReducer);
// export const routineStore = redux.createStore(routineReducer);
// export const medicineStore = redux.createStore(medicineReducer);

export const store = configureStore({
    reducer:{
        todoReducer,
        routineReducer,
        medicineReducer,
        notificationReducer
    }
}
)