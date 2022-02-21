import { IGameTitles } from '../interfaces/IGameTitles';

export const gameTitles = [
  {
    id: 1,
    title: '100k1',
    description: 'A fun team game in which participants guess the most '
        + 'popular answers to questions from different fields. Special knowledge is not '
        + 'required for this — a good mood, intelligence and friendly support are enough.',
  },
  {
    id: 2,
    title: 'Guess melody',
    description: 'A musical TV game, the essence of which consists'
        + ' in guessing a song or artist by the sounding melody',
  },
  {
    id: 3,
    title: 'ads',
  },
  {
    id: 4,
    title: 'Jeopardy',
    description: '',
  },
  {
    id: 5,
    title: 'Truth or action',
    description: 'Participants have to tell the truth or do some action',
  },
  {
    id: 6,
    title: 'What? where? when?',
  },
  {
    id: 7,
    title: 'The weakest link',
  },
  {
    id: 8,
    title: 'Guess the city',
  },
  {
    id: 9,
    title: 'Quick math and logic',
  },
];
export function gameTitlesReducer(
  state: IGameTitles = gameTitles,
  action: { type: string; payload: string },
) {
  switch (action.type) {
    default:
      return state;
  }
}
