import "./MistakesCounter.scss";
import React, { useEffect, useState } from "react";

export const classnameRoot = "mistakes-counter";
const numberOfMistakes = 3;

interface IMistakesCounterProps {
  stageNumber: number;
}

export const MistakesCounter: React.FC<IMistakesCounterProps> = ({
  stageNumber,
}) => {
  const [clickedMistakesIndexes, setClickedMistakesIndexes] = useState<
    number[]
  >([]);

  useEffect(() => {
    setClickedMistakesIndexes([]);
  }, [stageNumber]);

  return (
    <div className={classnameRoot}>
      <div className={`${classnameRoot}__round-icon`}>
        {Number(stageNumber) !== 3 ? stageNumber + 1 : "?"}
      </div>

      {[...Array(numberOfMistakes)].map((_mistakeButton, index) => (
        <button
          type="button"
          className={
            clickedMistakesIndexes.includes(index)
              ? `${classnameRoot}__cross-icon ${classnameRoot}__cross-icon_mistake`
              : `${classnameRoot}__cross-icon ${classnameRoot}__cross-icon_regular`
          }
          onClick={() => {
            setClickedMistakesIndexes([...clickedMistakesIndexes, index]);
            const incorrectAnswerSound = new Audio("/100-k-1-wrong-answer.mp3");
            incorrectAnswerSound.play();
          }}
        >
          {" "}
          X{" "}
        </button>
      ))}
    </div>
  );
};
