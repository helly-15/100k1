import './Score.css';
import React, { useState } from "react";
import { data } from '../data';

const rootClassname = 'score';
const right = new Audio("/game-sounds/right.mp3");

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




export const Score:React.FC=() => (
        <div className={ rootClassname }>
            { data.players.map((player) => <div className={ `${rootClassname}__item` } key={ player }>
                    { player }
                    <ScoreCounter/>
                </div>) }
        </div>
    )


