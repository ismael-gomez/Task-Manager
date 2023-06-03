import { combineReducers } from "redux";

const INITIAL_STATE = {
    current : [],
    all_subjects : [
        'hola',
        'adios',
        'hasta luego perro',
        'esto realmente esta funciuonando',
    ]
}

const subjectsReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SELECT_SUBJECT':

        const {current, all_subjects,} = state;

        const addSubject = all_subjects.splice(action.payload, 1);

        current.push(addSubject)
        
        const newState = {current, all_subjects};

        return newState

        default :
        return state
    }
}

export default combineReducers({
    subjectsReducer
})