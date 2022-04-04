import React from "react";
import { connect } from "react-redux";
import { RoundScore } from "../../components/round-score/RoundScore";
import { QuestionsBoard } from "../../components/questions-board/QuestionsBoard";
import "./RoundWrapper.scss";

import { IQuestionsData } from "../../../redux-state/interfaces/IQuestion";

import { IStoreState } from "../../../redux-state/interfaces/IStore";
import {
  CHANGE_LEFT_TEAM_SCORE,
  CHANGE_RIGHT_TEAM_SCORE,
  CHANGE_TOTAL_SCORE,
} from "../../../redux-state/reducers/scoreReducer";

const classnameRoot = "round-wrapper";

interface IRoundWrapperOwnProps {
  data: IQuestionsData;
  roundNumber: number;
}

interface IRoundWrapperStateProps {
  totalScore: number;
  leftTeamScore: number;
  rightTeamScore: number;
  setTotalScore: (arg0: number) => void;
  setLeftTeamScore: (arg0: number) => void;
  setRightTeamScore: (arg0: number) => void;
}

interface IRoundWrapperProps
  extends IRoundWrapperOwnProps,
    IRoundWrapperStateProps {}

export const RoundWrapper: React.FC<IRoundWrapperProps> = ({
  data,
  roundNumber,
  totalScore,
  setTotalScore,
  leftTeamScore,
  setLeftTeamScore,
  rightTeamScore,
  setRightTeamScore,
}) => {
  const questionText = data.questions[roundNumber].title || "Большая игра";
  return (
    <main className={classnameRoot}>
      <RoundScore
        score={totalScore}
        resetTotalScore={setTotalScore}
        onSetTeamScore={setTotalScore}
      />
      <span className={`${classnameRoot}__question-text`}>{questionText}</span>

      <div className={`${classnameRoot}__questions-board_wrapper`}>
        <aside className={`${classnameRoot}__questions-board_team`}>
          <RoundScore
            score={leftTeamScore}
            onSetTeamScore={setLeftTeamScore}
            totalScore={totalScore}
            teamScore={leftTeamScore}
            resetTotalScore={setTotalScore}
            roundNumber={roundNumber}
          />
        </aside>
        {Number(roundNumber) < 4 ? (
          <QuestionsBoard
            roundNumber={Number(roundNumber)}
            correctReplies={
              data.questions[roundNumber].correctReplies || [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
              ]
            }
            repliesScores={
              data.questions[roundNumber].repliesScores || [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
              ]
            }
            setTotalScore={setTotalScore}
            totalScore={Number(totalScore)}
          />
        ) : (
          <img
            className="round-wrapper__santa"
            src="/santa.png"
            alt="new year fireworks"
          />
        )}

        <aside className={`${classnameRoot}__questions-board_team`}>
          <RoundScore
            score={rightTeamScore}
            onSetTeamScore={setRightTeamScore}
            totalScore={Number(totalScore)}
            teamScore={Number(rightTeamScore)}
            resetTotalScore={setTotalScore}
            roundNumber={roundNumber}
          />
        </aside>
      </div>
    </main>
  );
};

export const RoundWrapperConnected: React.FC<IRoundWrapperOwnProps> = connect(
  (state: IStoreState) => ({
    totalScore: state.score.totalScore,
    leftTeamScore: state.score.leftTeamScore,
    rightTeamScore: state.score.rightTeamScore,
  }),
  (dispatch) => ({
    setTotalScore: (score: number) => {
      dispatch({ type: CHANGE_TOTAL_SCORE, payload: score });
    },
    setLeftTeamScore: (score: number) => {
      dispatch({ type: CHANGE_LEFT_TEAM_SCORE, payload: score });
    },
    setRightTeamScore: (score: number) => {
      dispatch({ type: CHANGE_RIGHT_TEAM_SCORE, payload: score });
    },
  })
)(RoundWrapper);
