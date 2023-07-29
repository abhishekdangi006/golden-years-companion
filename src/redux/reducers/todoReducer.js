import {ADD_TODO, TOGGLE_TODO} from "../actions/todoActions";

const initialState = {
    todos:[
        {
            "text":"Meeting at 9",
            completed: true,
        },
        {
            "text":"Go to gym",
            completed: false,
        },
    ]
}

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