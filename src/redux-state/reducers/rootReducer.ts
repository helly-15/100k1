import { combineReducers } from "redux";
import { questionsReducer } from "./questionsReducer";
import { scoreReducer } from "./scoreReducer";
import { gameTitlesReducer } from "./gameTitlesReducer";
import { localeReducer } from "./localeReducer";
import {guessMelodyScoreReducer} from "./guessMelodyScoreReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
  questionsData: questionsReducer,
  score: scoreReducer,
  gameTitles: gameTitlesReducer,
  locale: localeReducer,
  guessMelodyScore: guessMelodyScoreReducer,
  user:userReducer,
});
