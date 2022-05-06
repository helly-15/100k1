import { IQuestions } from "./IQuestion";
import { IScore } from "./IScore";
import { IGameTitles } from "./IGameTitles";
import { ILocale } from "./ILocale";
import {IGuessMelodyScore} from "./IGuessMelodyScore";
import {IUser} from "./IUser";

export interface IStoreState {
  locale: ILocale;
  questionsData: IQuestions;
  score: IScore;
  gameTitles: IGameTitles;
  guessMelodyScore: IGuessMelodyScore;
  user:IUser;
}
