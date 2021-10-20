import './RoundScore.scss';

const classnameRoot = 'round-score';

export const RoundScore = (props) => {
    return <div className={ classnameRoot }>
        <div>
            { props.score }
        </div>

    </div>
}
