import * as actionTypes from './Types';

export const setNumber = number => {
    return {
        type: actionTypes.SET_NUMBER,
        payload: {
            currentNumber: number
        }
    }
}