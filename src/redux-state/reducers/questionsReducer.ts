import { dataFromStore } from '../../data';
import { IQuestions, IQuestionsData } from '../interfaces/IQuestion';

export const GET_DATA = 'GET_DATA';
export const GET_DATA_REQUESTED = 'GET_DATA_REQUESTED';

export function questionsReducer(
  state:IQuestions = { questionsData: dataFromStore },
  action: { type: string; payload: IQuestionsData; },
) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        questionsData: action.payload,
      };

    default:
      return state;
  }
}
