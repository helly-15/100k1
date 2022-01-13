import {dataFromStore} from "../../data";

const GET_DATA = 'GET_DATA';


export function questionsReducer(state = {questionsData: dataFromStore}, action: { type: any; payload: any; }) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                questionsData: action.payload
            }

        default:
            return state
    }
}
