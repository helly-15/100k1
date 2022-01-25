import './MistakesCounter.scss';
import React, { useEffect, useState } from 'react';

const classnameRoot = 'mistakes-counter';
const numberOfMistakes = 3;

interface IMistakesCounterProps {
    roundNumber: number,
}

export const MistakesCounter: React.FC<IMistakesCounterProps> = ({ roundNumber }) => {
  const [clickedMistakesIndexes, setClickedMistakesIndexes] = useState<number[]>([]);

  useEffect(() => {
    setClickedMistakesIndexes([]);
  }, [roundNumber]);

  return (
    <div className={classnameRoot}>
      <div className={`${classnameRoot}__round-icon`}>
        { Number(roundNumber) !== 3 ? roundNumber + 1 : '?' }
      </div>

      { [...Array(numberOfMistakes)].map((_mistakeButton, index) => (
        <button
          type="button"
          className={clickedMistakesIndexes.includes(index)
            ? `${classnameRoot}__cross-icon ${classnameRoot}__cross-icon_mistake`
            : `${classnameRoot}__cross-icon ${classnameRoot}__cross-icon_regular`}
          onClick={() => {
            setClickedMistakesIndexes([...clickedMistakesIndexes, index]);
            const incorrectAnswerSound = new Audio('/100-k-1-wrong-answer.mp3');
            incorrectAnswerSound.play();
          }}
          key={Math.random()}
        >
          {' '}
          X
          {' '}
        </button>
      )) }

    </div>
  );
};
