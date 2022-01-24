import { combineReducers } from 'redux';
import { questionsReducer } from './questionsReducer';
import { scoreReducer } from './scoreReducer';

export const rootReducer = combineReducers({
  questionsData: questionsReducer,
  score: scoreReducer,
});
