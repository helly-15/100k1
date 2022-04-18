import './Score.css';
import React from "react";
import {useTranslation} from "react-i18next";
import {connect} from "react-redux";
import {IStoreState} from "../../redux-state/interfaces/IStore";
import {CHANGE_GUESS_MELODY_TEAMS_SCORE} from "../../redux-state/reducers/guessMelodyScoreReducer";

const rootClassname = 'score';
const right = new Audio("/game-sounds/right.mp3");
const players= ['homersimpson', 'spongebob', 'ericcartman','pluto'];

export interface IScoreCounter {
    guessMelodyTeamsScore:number[],
    setScoreData:(score:number[])=>void,
    index:number
}

export const ScoreCounterComponent:React.FC<IScoreCounter>=({guessMelodyTeamsScore, setScoreData, index})=> (
        <button
            type="button"
            className={ `${rootClassname}__item_score` }
            onClick={ () => {
                const newScore =  [...guessMelodyTeamsScore];
                newScore[index]  += 1;
                right.play()
                setScoreData(newScore)
            } }>
            { guessMelodyTeamsScore[index] }
        </button>

    )

export const ScoreCounter = connect(
    (state: IStoreState) => (
        {
        guessMelodyTeamsScore: state.guessMelodyScore.guessMelodyTeamsScore,
    }),
    (dispatch) => (
        {
        setScoreData: (score: number[]) => {
            dispatch({ type: CHANGE_GUESS_MELODY_TEAMS_SCORE, payload: score });
        },
    })
)(ScoreCounterComponent);

export const Score:React.FC=() => {
    const { t } = useTranslation();
    return (
        <div className={ rootClassname }>
            { players.map((player, index) => <div className={ `${rootClassname}__item` } key={ player }>
                {t(`${player}`)}
                    <ScoreCounter index = {index}/>
                </div>) }
        </div>
    )}


