import './MistakesCounter.scss';
import {useEffect} from "react";

const classnameRoot = 'mistakes-counter';
const numberOfMistakes = 3;

export const MistakesCounter = (props) => {

    useEffect(() => {
        if (document.getElementsByClassName(classnameRoot + '__cross-icon')) {
            Array.from(document.getElementsByClassName(classnameRoot + '__cross-icon')).map(elem => elem.style.background = 'linear-gradient(to bottom, #fefcea 0%, #f1da36 100%)')

        }
    }, [props.roundNumber]);
    return <div className={ classnameRoot }>
        <div className={ classnameRoot + '__round-icon' }>
            { +props.roundNumber !== 3 ? props.roundNumber + 1 : '?' }
        </div>

        { Array.apply(null, Array(numberOfMistakes)).map((mistakeButton, index) => {
            return <button className={ classnameRoot + '__cross-icon' }
                           onClick={ (e) => onIncorrectAnswer(e) }
                           key={ index }
            > X </button>
        }) }

    </div>
}

const onIncorrectAnswer = (e) => {
    let incorrectAnswerSound = new Audio("/100-k-1-wrong-answer.mp3")
    incorrectAnswerSound.play()
    e.target.style.background = ' linear-gradient(315deg, #fc9842 0%, #fe5f75 74%)'
}
