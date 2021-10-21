import './QuestionsBoard.scss';
import {MistakesCounter} from "../mistakes-counter/MistakesCounter";
import {RepliesList} from "../question-list/RepliesList";
import {useState} from "react";

const classnameRoot = 'questions-board';

export const QuestionsBoard = () => {
    const correctReplies = ['Ok', 'Привет', 'Поцелуй', ' Воинское приветствие', 'Рожки', 'Рукопожатие']
    const [repliesForRound, setRepliesForRound] = useState(['1', '2', '3', '4', '5', '6']);
    const setRepliesForRoundOpened = (index) => {
        setRepliesForRound([
            ...repliesForRound.slice(0, index),
            correctReplies[index],
            ...repliesForRound.slice(index + 1)
        ])
    };

    return <div className={ classnameRoot }>
        <MistakesCounter/>
        <RepliesList repliesForRound={ repliesForRound }
                     setRepliesForRoundOpened={ setRepliesForRoundOpened }
                     correctReplies={ correctReplies }
        />
        <MistakesCounter/>
    </div>
}
