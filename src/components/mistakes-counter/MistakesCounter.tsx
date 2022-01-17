import './MistakesCounter.scss';
import React, { useEffect, useState } from "react";

const classnameRoot = 'mistakes-counter';
const numberOfMistakes = 3;

interface IMistakesCounterProps {
    roundNumber: number,

}

export const MistakesCounter: React.FC<IMistakesCounterProps> = (props) => {

    const [crossButtonsArr, setCrossButtonsArr] = useState<HTMLButtonElement[]>([]);

    useEffect(() => {

        if (crossButtonsArr.length) {
            crossButtonsArr.map((elem) => elem.style.background = 'linear-gradient(to bottom, #fefcea 0%, #f1da36 100%)')
            setCrossButtonsArr([])
        }
    }, [props.roundNumber]);

    return <div className={ classnameRoot }>
        <div className={ classnameRoot + '__round-icon' }>
            { Number(props.roundNumber) !== 3 ? props.roundNumber + 1 : '?' }
        </div>

        { Array.apply(null, Array(numberOfMistakes)).map((_mistakeButton, index) => {
            return <button className={ classnameRoot + '__cross-icon' }
                           onClick={ (e) => onIncorrectAnswer(e, setCrossButtonsArr, crossButtonsArr)
                           }
                           key={ index }
            > X </button>
        }) }

    </div>
}

const onIncorrectAnswer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, addElemToArray: (arg: HTMLButtonElement[]) => void, crossButtonsArr: HTMLButtonElement[]) => {
    const target = e.target as HTMLButtonElement;
    addElemToArray([...crossButtonsArr, target])
    let incorrectAnswerSound = new Audio("/100-k-1-wrong-answer.mp3")
    incorrectAnswerSound.play();

    target.style.background = ' linear-gradient(315deg, #fc9842 0%, #fe5f75 74%)'
}
