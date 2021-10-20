import './MistakesCounter.scss';

const classnameRoot = 'mistakes-counter';
const numberOfMistakes = 3;

export const MistakesCounter = () => {
    return <div className={ classnameRoot }>
        <div className={ classnameRoot + '__round-icon' }>
            { 1 }
        </div>

        { Array.apply(null, Array(numberOfMistakes)).map(mistakeButton => {
           return <button className={ classnameRoot + '__cross-icon' }> X </button>
        }) }

    </div>
}
