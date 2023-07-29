import {TOGGLE_Routine} from "../actions/routineActions";

const initialState = {
    routines:[
        {
            "text":"Meeting at 9",
            completed: false,
        },
        {
            "text":"Go to gym",
            completed: false,
        },
    ]
}

export function routineReducer (state=initialState , action){
    switch(action.type){
        case TOGGLE_Routine:
            return {
                ...state,
                routines: state.routines.map((routine, i) => {
                    if(i === action.index){
                        routine.completed=!routine.completed
                    }
                    return routine;
                }
                )
            }
        default:
            return state;
    }
}