import './Score.css';
import React, { useState } from "react";
import {useTranslation} from "react-i18next";

const rootClassname = 'score';
const right = new Audio("/game-sounds/right.mp3");
const players= ['homersimpson', 'spongebob', 'ericcartman','pluto'];

export const ScoreCounter:React.FC=()=> {
    const [score, setScore] = useState(0);
    return (
        <button
            type="button"
            className={ `${rootClassname}__item_score` }
                onClick={ () => {
            right.play()
            setScore(score + 1)
        } }>
            { score }
        </button>

    );
}


export const Score:React.FC=() => {
    const { t } = useTranslation();
    return (
        <div className={ rootClassname }>
            { players.map((player) => <div className={ `${rootClassname}__item` } key={ player }>
                {t(`${player}`)}
                    <ScoreCounter/>
                </div>) }
        </div>
    )}


