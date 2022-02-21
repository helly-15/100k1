import { dataFromStore } from '../../data';
import { IQuestions, IQuestionsData } from '../interfaces/IQuestion';

export const GET_DATA_100K1 = '100K1/GET_DATA';
export const GET_DATA_REQUESTED_100K1 = '100K1/GET_DATA_REQUESTED';
export const SET_LOADING_100K1 = '100K1/SET_LOADING';

export function questionsReducer(
  state:IQuestions = {
    questionsData: dataFromStore,
    loading: false,
  },
  action: { type: string; payload: IQuestionsData; },
) {
  switch (action.type) {
    case GET_DATA_100K1:
      return {
        ...state,
        questionsData: action.payload,
      };

    case SET_LOADING_100K1:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
}
