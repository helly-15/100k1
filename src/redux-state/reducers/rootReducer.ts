import { combineReducers } from "redux";
import { questionsReducer } from "./questionsReducer";
import { scoreReducer } from "./scoreReducer";
import { gameTitlesReducer } from "./gameTitlesReducer";
import { localeReducer } from "./localeReducer";

export const rootReducer = combineReducers({
  questionsData: questionsReducer,
  score: scoreReducer,
  gameTitles: gameTitlesReducer,
  locale: localeReducer,
});
