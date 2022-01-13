import {dataFromStore} from "../../data";
import { IQuestions } from "../interfaces/IQuestion";

export const GET_DATA = 'GET_DATA';
export const GET_DATA_REQUESTED = 'GET_DATA_REQUESTED ';

export function questionsReducer(state = {questionsData: dataFromStore}, action: { type: string; payload: IQuestions; }) {

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
