import { RoundScore } from "../../components/round-score/RoundScore";
import { QuestionsBoard } from "../../components/questions-board/QuestionsBoard";
import './RoundWrapper.scss';
import React, { useState } from "react";
import { IQuestionsData } from "../../redux-state/interfaces/IQuestion";

const classnameRoot = 'round-wrapper';

interface IRoundWrapperProps {
    data: IQuestionsData,
    roundNumber: number,
}

export const RoundWrapper: React.FC<IRoundWrapperProps> = ({data, roundNumber}) => {
    const questionText = data.questions[roundNumber].title || 'Большая игра';
    const [totalScore, setTotalScore] = useState(0);
    const [leftTeamScore, setLeftTeamScore] = useState(0);
    const [rightTeamScore, setRightTeamScore] = useState(0);

    return <main className={ classnameRoot }>
        <RoundScore score={ totalScore } resetTotalScore={ setTotalScore } onSetTeamScore={ setTotalScore }/>
        <span className={ classnameRoot + '__question-text' }>
          { questionText }
        </span>

        <div className={ classnameRoot + '__questions-board_wrapper' }>
            <aside className={ classnameRoot + '__questions-board_team' }>
                <RoundScore score={ leftTeamScore } onSetTeamScore={ setLeftTeamScore }
                            totalScore={ totalScore } teamScore={ leftTeamScore }
                            resetTotalScore={ setTotalScore } roundNumber={ roundNumber }/>
            </aside>
            { Number(roundNumber) < 4 ?
                <QuestionsBoard
                    roundNumber={ Number(roundNumber) }
                    correctReplies={ data.questions[roundNumber].correctReplies || ['1', '2', '3', '4', '5', '6'] }
                    repliesScores={ data.questions[roundNumber].repliesScores || ['1', '2', '3', '4', '5', '6'] }
                    setTotalScore={ setTotalScore }
                    totalScore={ Number(totalScore) }
                /> : <img className={ 'round-wrapper__santa' } src={ '/santa.png' } alt={ 'new year fireworks' }/>
            }


            <aside className={ classnameRoot + '__questions-board_team' }>
                <RoundScore score={ rightTeamScore } onSetTeamScore={ setRightTeamScore }
                            totalScore={ Number(totalScore) } teamScore={ Number(rightTeamScore) }
                            resetTotalScore={ setTotalScore } roundNumber={ roundNumber }/>
            </aside>
        </div>
    </main>
}
