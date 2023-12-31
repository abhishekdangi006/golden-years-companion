import { createSlice } from "@reduxjs/toolkit";
// import {TOGGLE_Routine} from "../actions/routineActions";

const initialState = {
    routines:[
        {
            "time": "7AM",
            "text":"Go to walk",
            completed: false,
        },
        {
            "time": "8AM",
            "text":"take breakfast",
            completed: false,
        },
        {
            "time": "9AM",
            "text":"go to temple",
            completed: false,
        },
        {
            "time": "12PM",
            "text":"Lunch time",
            completed: false,
        },
        {
            "time": "2PM",
            "text":"Take Power nape",
            completed: false,
        },
        {
            "time": "4PM",
            "text":"Snack time",
            completed: false,
        },
        {
            "time": "5PM",
            "text":"Social time",
            completed: false,
        },
        {
            "time": "8PM",
            "text":"Dinner Time",
            completed: false,
        },
        {
            "time": "10PM",
            "text":"Sleep Now",
            completed: false,
        },
    ]
}
//using redux toolkit

const routineSlice = createSlice({
    name: "routine",
    initialState,
    reducers: {
        toggle: (state, action)=>{
            state.routines.map((routine, i)=> {
                if(i === action.payload){
                    routine.completed = !routine.completed;
                }
                return routine;
            })
        }
    }
})

export const routineReducer = routineSlice.reducer;
export const actions = routineSlice.actions;
export const routineSelector = (state) => state.routineReducer.routines;

// without react redux toolkit

/*
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

*/