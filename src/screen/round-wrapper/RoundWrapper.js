import {RoundScore} from "../../components/round-score/RoundScore";
import {QuestionsBoard} from "../../components/questions-board/QuestionsBoard";
import './RoundWrapper.scss';
import {useState} from "react";

const classnameRoot = 'round-wrapper';

export const RoundWrapper = (props) => {
    const questionText = props.data.questions[props.roundNumber].title || 'Большая игра';
     const [totalScore, setTotalScore] = useState(0);
    const [leftTeamScore, setLeftTeamScore] = useState([0]);
    const [rightTeamScore, setRightTeamScore] = useState([0]);

    return <main className={ classnameRoot }>
        <RoundScore score={ totalScore } resetTotalScore = {setTotalScore} onSetTeamScore = {setTotalScore}/>
        <span className={ classnameRoot +'__question-text'}>
          {questionText}
        </span>

        <div className={classnameRoot + '__questions-board_wrapper'}>
            <aside className={classnameRoot + '__questions-board_team'}>
                <RoundScore score={ leftTeamScore } onSetTeamScore = {setLeftTeamScore}
                            totalScore = {Number(totalScore)} teamScore = {Number(leftTeamScore)}
                            resetTotalScore = {setTotalScore} roundNumber = {props.roundNumber}/>
            </aside>
                <QuestionsBoard
                                roundNumber = {+props.roundNumber}
                                 correctReplies = {props.data.questions[props.roundNumber].correctReplies || ['1', '2', '3', '4', '5', '6']}
                                 repliesScores = {props.data.questions[props.roundNumber].repliesScores || ['1', '2', '3', '4', '5', '6']}
                                 setTotalScore = {setTotalScore}
                                 totalScore = {Number(totalScore)}
                />

            <aside className={classnameRoot + '__questions-board_team'}>
                <RoundScore score={ rightTeamScore } onSetTeamScore = {setRightTeamScore}
                            totalScore = {Number(totalScore)} teamScore = {Number(rightTeamScore)}
                            resetTotalScore = {setTotalScore} roundNumber = {props.roundNumber}/>
            </aside>
        </div>

    </main>
}
