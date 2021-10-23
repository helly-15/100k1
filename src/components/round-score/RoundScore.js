import './RoundScore.scss';

const classnameRoot = 'round-score';

export const RoundScore = (props) => {
    const coefficientOfRoundMultiplication = +props.roundNumber === 1 ? 2 : +props.roundNumber === 2 ? 3 : 1;
    return <div className={ classnameRoot } onClick={ () => {
        let scoreGainedSound = new Audio("/round.mp3");
        scoreGainedSound.play();
    }

    }>
        <div onClick={ () => {
            props.onSetTeamScore(props.totalScore * coefficientOfRoundMultiplication + props.teamScore)
            props.resetTotalScore(0)
        }
        }>
            { props.score }
        </div>

    </div>
}
