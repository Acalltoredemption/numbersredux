import * as actionTypes from './Types';



const initialState = {
    currentNumber: 0,
    currentColor: 'green'
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_NUMBER:
            return {
                ...state,
                currentNumber: action.payload.currentNumber
            }
        case actionTypes.SET_COLOR:
            return {
                ...state,
                currentColor: action.payload.currentColor
            }
            default:
                return state;
    }
}


export default rootReducer;