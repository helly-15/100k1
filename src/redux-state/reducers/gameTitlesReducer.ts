import { IGameTitles } from '../interfaces/IGameTitles';

export const gameTitles = ['100k1', 'guess-melody', 'ads',
  'truth or action', 'svoya igra', 'what? where? when?',
  'Poslednee zveno', 'Guess the sity', 'Quick math and logic'];

export function gameTitlesReducer(
  state:IGameTitles = gameTitles,
  action: { type: string; payload: string},
) {
  switch (action.type) {
    default:
      return state;
  }
}
