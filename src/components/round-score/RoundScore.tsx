import './RoundScore.scss';
import React from "react";

const classnameRoot = 'round-score';

interface IRoundScoreProps {
    onSetTeamScore: React.Dispatch<React.SetStateAction<number>>,
    resetTotalScore: React.Dispatch<React.SetStateAction<number>>
    roundNumber?: number,
    score: number,
    totalScore?: number,
    teamScore?: number,
}

export const RoundScore: React.FC<IRoundScoreProps> = (props) => {
    const coefficientOfRoundMultiplication = props.roundNumber === 1 ? 2 : props.roundNumber === 2 ? 3 : 1;
    return <div className={ classnameRoot } onClick={ () => {
        let scoreGainedSound = new Audio("/round.mp3");
        scoreGainedSound.play();
    }
    }>
        <div onClick={ () => {
            props.onSetTeamScore((props.totalScore || 0) * coefficientOfRoundMultiplication + (props.teamScore || 0))
            props.resetTotalScore(0)
        }
        }>
            { props.score }
        </div>
    </div>
}
