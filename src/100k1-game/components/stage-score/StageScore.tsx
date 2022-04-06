import "./StageScore.scss";
import React from "react";

const classnameRoot = "stage-score";

interface IStageScoreProps {
  onSetTeamScore: (arg0: number) => void;
  resetTotalScore: (arg0: number) => void;
  stageNumber?: number;
  score: number;
  totalScore?: number;
  teamScore?: number;
}

export const StageScore: React.FC<IStageScoreProps> = ({
  onSetTeamScore,
  resetTotalScore,
  stageNumber = 0,
  score,
  totalScore = 0,
  teamScore = 0,
}) => {
  const coefficientOfStageMultiplication =
    stageNumber === 1 ? 2 : stageNumber === 2 ? 3 : 1;
  const setTeamScore = () => {
    onSetTeamScore(totalScore * coefficientOfStageMultiplication + teamScore);
    resetTotalScore(0);
  };
  const scoreGainedSound = new Audio("/round.mp3");
  return (
    <div
      role="button"
      tabIndex={0}
      className={classnameRoot}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          scoreGainedSound.play();
        }
      }}
      onClick={() => {
        scoreGainedSound.play();
      }}
    >
      <div
        onClick={setTeamScore}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setTeamScore();
          }
        }}
        role="button"
      >
        {score}
      </div>
    </div>
  );
};
