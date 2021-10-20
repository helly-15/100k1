import './QuestionsBoard.scss';
import {MistakesCounter} from "../mistakes-counter/MistakesCounter";
import {RepliesList} from "../question-list/RepliesList";

const classnameRoot = 'questions-board';
const repliesForRound = ['1', '2', '3', '4', '5', '6']

export const QuestionsBoard = () => {
    return <div className={ classnameRoot }>
        <MistakesCounter/>
        <RepliesList repliesForRound = {repliesForRound}/>
        <MistakesCounter/>

    </div>
}
