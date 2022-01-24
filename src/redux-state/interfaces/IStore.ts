import { IQuestions } from './IQuestion';
import { IScore } from './IScore';

export interface IStoreState {
    questionsData: IQuestions,
    score: IScore,
}
