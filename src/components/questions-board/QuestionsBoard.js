import './QuestionsBoard.scss';
import {MistakesCounter} from "../mistakes-counter/MistakesCounter";
import {RepliesList} from "../question-list/RepliesList";
import {useState} from "react";

const classnameRoot = 'questions-board';

export const QuestionsBoard = () => {
    const correctReplies = ['Ok', 'Привет', 'Поцелуй', ' Воинское приветствие', 'Рожки', 'Рукопожатие'];
    const repliesScores = ['27', '19', '16', ' 13', '10', '5'];
    const [guessedReplies, setGuessedReplies] = useState([]);
    const [repliesForRound, setRepliesForRound] = useState(['1', '2', '3', '4', '5', '6']);
    const setRepliesForRoundOpened = (index) => {
        setRepliesForRound([
            ...repliesForRound.slice(0, index),
            correctReplies[index],
            ...repliesForRound.slice(index + 1)
        ]);
        setGuessedReplies([
            ...guessedReplies,
            index
        ]);
    };

    return <div className={ classnameRoot }>
        <MistakesCounter/>
        <RepliesList repliesForRound={ repliesForRound }
                     setRepliesForRoundOpened={ setRepliesForRoundOpened }
                     correctReplies={ correctReplies }
                     guessedReplies = {guessedReplies}
                     repliesScores = {repliesScores }
        />
        <MistakesCounter/>
    </div>
}
