import { IQuestions } from './IQuestion';
import { IScore } from './IScore';
import { IGameTitles } from './IGameTitles';

export interface IStoreState {
    questionsData: IQuestions,
    score: IScore,
    gameTitles: IGameTitles,
}
