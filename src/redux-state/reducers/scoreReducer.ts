import { IScore } from '../interfaces/IScore';

export const CHANGE_TOTAL_SCORE = 'CHANGE_TOTAL_SCORE';
export const CHANGE_LEFT_TEAM_SCORE = 'CHANGE_LEFT_TEAM_SCORE';
export const CHANGE_RIGHT_TEAM_SCORE = 'CHANGE_RIGHT_TEAM_SCORE';

export function scoreReducer(state: IScore = {
  totalScore: 0,
  leftTeamScore: 0,
  rightTeamScore: 0,
}, action: { type: string; payload: number }) {
  switch (action.type) {
    case CHANGE_TOTAL_SCORE:
      return {
        ...state,
        totalScore: action.payload,
      };

    case CHANGE_LEFT_TEAM_SCORE:
      return {
        ...state,
        leftTeamScore: action.payload,
      };

    case CHANGE_RIGHT_TEAM_SCORE:
      return {
        ...state,
        rightTeamScore: action.payload,
      };

    default:
      return state;
  }
}
