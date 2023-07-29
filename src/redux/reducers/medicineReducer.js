import {TOGGLE_Medicine} from "../actions/medicineActions";

const initialState = {
    medicines:[
        {
            "name": "falani",
            "time": "9 AM",
            "description":"Meeting at 9",
            completed: false,
        },
        {
            "name": "falani",
            "time": "9 AM",
            "description":"Meeting at 9",
            completed: false,
        },
    ]
}

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