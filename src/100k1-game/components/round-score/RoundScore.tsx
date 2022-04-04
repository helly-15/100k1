import "./RoundScore.scss";
import React from "react";

const classnameRoot = "round-score";

interface IRoundScoreProps {
  onSetTeamScore: (arg0: number) => void;
  resetTotalScore: (arg0: number) => void;
  roundNumber?: number;
  score: number;
  totalScore?: number;
  teamScore?: number;
}

export const RoundScore: React.FC<IRoundScoreProps> = ({
  onSetTeamScore,
  resetTotalScore,
  roundNumber = 0,
  score,
  totalScore = 0,
  teamScore = 0,
}) => {
  const coefficientOfRoundMultiplication =
    roundNumber === 1 ? 2 : roundNumber === 2 ? 3 : 1;
  const setTeamScore = () => {
    onSetTeamScore(totalScore * coefficientOfRoundMultiplication + teamScore);
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
