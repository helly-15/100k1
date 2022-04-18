import {IGuessMelodyScore} from "../interfaces/IGuessMelodyScore";

export const CHANGE_GUESS_MELODY_TEAMS_SCORE = "guess-melody/CHANGE_TOTAL_SCORE";

export function guessMelodyScoreReducer(
    state: IGuessMelodyScore = {
        guessMelodyTeamsScore: [0, 0, 0, 0]
    },
    action: { type: string; payload: number[] }
) {
    switch (action.type) {
        case CHANGE_GUESS_MELODY_TEAMS_SCORE:
            return {
                ...state,
                guessMelodyTeamsScore: action.payload,
            };

        default:
            return state;
    }
}