import { IQuestions } from "./IQuestion";
import { IScore } from "./IScore";
import { IGameTitles } from "./IGameTitles";
import { ILocale } from "./ILocale";
import {IGuessMelodyScore} from "./IGuessMelodyScore";

export interface IStoreState {
  locale: ILocale;
  questionsData: IQuestions;
  score: IScore;
  gameTitles: IGameTitles;
  guessMelodyScore: IGuessMelodyScore
}
