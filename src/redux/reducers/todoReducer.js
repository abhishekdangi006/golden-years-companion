import { createSlice } from "@reduxjs/toolkit";
// import {ADD_TODO, TOGGLE_TODO} from "../actions/todoActions";
const initialState = {
    todos:[
        
    ]
}
// USING REACT REDUX TOOLKIT

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state,action)=>{
            state.todos.push({
                text: action.payload,
                completed: false,
            })
        },
        toggle: (state, action) => {
            state.todos.map((todo, i) => {
                if(i == action.payload){
                    todo.completed = !todo.completed
                }
            })
            return todo;
        } 

    }
})

/*   //USING REACT REDUX 

export function todoReducer (state=initialState , action){
    switch(action.type){
        case ADD_TODO:
        return {
            ...state,
            todos:[
                {
                    text: action.text,
                    completed: false,
                },
                ...state.todos,
            ]
        }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if(i === action.index){
                        todo.completed=!todo.completed
                    }
                    return todo;
                }
                )
            }
        default:
            return state;
    }
}

*/