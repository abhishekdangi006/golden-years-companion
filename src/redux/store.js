import * as redux from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { routineReducer } from "./reducers/routineReducer";
import { medicineReducer } from "./reducers/medicineReducer";

export const store = redux.createStore(todoReducer);
export const routineStore = redux.createStore(routineReducer);
export const medicineStore = redux.createStore(medicineReducer);