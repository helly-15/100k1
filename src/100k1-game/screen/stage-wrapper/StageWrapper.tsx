import React from "react";
import { connect } from "react-redux";
import { StageScore } from "../../components/stage-score/StageScore";
import { QuestionsBoard } from "../../components/questions-board/QuestionsBoard";
import "./StageWrapper.scss";

import { IQuestionsData } from "../../../redux-state/interfaces/IQuestion";

import { IStoreState } from "../../../redux-state/interfaces/IStore";
import {
  CHANGE_LEFT_TEAM_SCORE,
  CHANGE_RIGHT_TEAM_SCORE,
  CHANGE_TOTAL_SCORE,
} from "../../../redux-state/reducers/scoreReducer";

const classnameRoot = "stage-wrapper";

interface IStageWrapperOwnProps {
  data: IQuestionsData;
  stageNumber: number;
}

interface IStageWrapperStateProps {
  totalScore: number;
  leftTeamScore: number;
  rightTeamScore: number;
  setTotalScore: (arg0: number) => void;
  setLeftTeamScore: (arg0: number) => void;
  setRightTeamScore: (arg0: number) => void;
}

interface IStageWrapperProps
  extends IStageWrapperOwnProps,
    IStageWrapperStateProps {}

export const StageWrapper: React.FC<IStageWrapperProps> = ({
  data,
  stageNumber,
  totalScore,
  setTotalScore,
  leftTeamScore,
  setLeftTeamScore,
  rightTeamScore,
  setRightTeamScore,
}) => {
  const questionText = data.questions[stageNumber].title || "Большая игра";
  return (
    <main className={classnameRoot}>
      <StageScore
        score={totalScore}
        resetTotalScore={setTotalScore}
        onSetTeamScore={setTotalScore}
      />
      <span className={`${classnameRoot}__question-text`}>{questionText}</span>

      <div className={`${classnameRoot}__questions-board_wrapper`}>
        <aside className={`${classnameRoot}__questions-board_team`}>
          <StageScore
            score={leftTeamScore}
            onSetTeamScore={setLeftTeamScore}
            totalScore={totalScore}
            teamScore={leftTeamScore}
            resetTotalScore={setTotalScore}
            stageNumber={stageNumber}
          />
        </aside>
        {Number(stageNumber) < 4 ? (
          <QuestionsBoard
            stageNumber={Number(stageNumber)}
            correctReplies={
              data.questions[stageNumber].correctReplies || [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
              ]
            }
            repliesScores={
              data.questions[stageNumber].repliesScores || [
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
            className="stage-wrapper__santa"
            src="/santa.png"
            alt="new year fireworks"
          />
        )}

        <aside className={`${classnameRoot}__questions-board_team`}>
          <StageScore
            score={rightTeamScore}
            onSetTeamScore={setRightTeamScore}
            totalScore={Number(totalScore)}
            teamScore={Number(rightTeamScore)}
            resetTotalScore={setTotalScore}
            stageNumber={stageNumber}
          />
        </aside>
      </div>
    </main>
  );
};

export const StageWrapperConnected: React.FC<IStageWrapperOwnProps> = connect(
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
)(StageWrapper);
