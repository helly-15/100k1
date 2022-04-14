import { IGameTitles } from "../interfaces/IGameTitles";

export const gameTitles = [
  {
    id: 1,
    title: "100k1",
    url: "100k1",
    description:
      "A fun team game in which participants guess the most " +
      "popular answers to questions from different fields. Special knowledge is not " +
      "required for this — a good mood, intelligence and friendly support are enough.",
    numberOfRounds: 8,
  },

  {
    id: 2,
    title: "Guess melody",
    url: "guessmelody",
    description:
      "A musical TV game, the essence of which consists" +
      " in guessing a song or artist by the sounding melody",
  },
  {
    id: 3,
    title: "ads",
  },
  {
    id: 4,
    title: "Jeopardy",
    url: "jeopardy",
    description: "",
  },
  {
    id: 5,
    title: "Truth or action",
    url: "truthoraction",
    description: "Participants have to tell the truth or do some action",
  },
  {
    id: 6,
    title: "What? where? when?",
    url: "whatwherewhen",
  },
  {
    id: 7,
    title: "The weakest link",
    url: "theweakestlink",
  },
  {
    id: 8,
    title: "Guess the city",
    url: "guessthecity",
  },
  {
    id: 9,
    title: "Quick math and logic",
    url: "quickmathandlogic",
  },
];
export function gameTitlesReducer(
  state: IGameTitles = gameTitles,
  action: { type: string; payload?: string }
) {
  switch (action.type) {
    default:
      return state;
  }
}
