import { createSlice } from "@reduxjs/toolkit";
// import {TOGGLE_Medicine} from "../actions/medicineActions";

const initialState = {
    medicines:[
        {
            "name": "Amlodipine",
            "time": "before breakfast",
            "description":"bp medicine",
            completed: false,
        },
        {
            "name": "Beta-Blockers",
            "time": "after breakfast",
            "description":"heart medicine",
            completed: false,
        },
        {
            "name": "Insulin",
            "time": "before lunch",
            "description":"Diabetes medicine",
            completed: false,
        },
        {
            "name": "Beta-Blockers",
            "time": "after lunch",
            "description":"heart medicine",
            completed: false,
        },
        {
            "name": "SGLT-2 Inhibitors",
            "time": "before dinner",
            "description":"bp medicine",
            completed: false,
        },
        {
            "name": "Beta-Blockers",
            "time": "before dinner",
            "description":"heart medicine",
            completed: false,
        },
        {
            "name": "Meglitinides",
            "time": "after dinner",
            "description":"bp medicine",
            completed: false,
        },
        {
            "name": "Metformin",
            "time": "after dinner",
            "description":"Diabetes medicine",
            completed: false,
        },
    ]
}


const medicineSlice = createSlice({
    name: "medicine",
    initialState,
    reducers : {
        toggle : (state, action) => {
            state.medicines.map((medicine, i) => {
                if(i === action.payload){
                    medicine.completed = !medicine.completed;
                }
                return medicine;
            })
        }
    }
})

export const medicineReducer = medicineSlice.reducer;
export const actions = medicineSlice.actions;

/*
export function medicineReducer (state=initialState , action){
    switch(action.type){
        case TOGGLE_Medicine:
            return {
                ...state,
                medicines: state.medicines.map((medicine, i) => {
                    if(i === action.index){
                        medicine.completed=!medicine.completed
                    }
                    return medicine;
                }
                )
            }
        default:
            return state;
    }
}

*/