import './Navbar.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import { routePaths } from '../questions-board/QuestionsBoard';

const classnameRoot = 'navbar';

interface INavbarProps {
    activeRoundNumber: number,
    roundsNames: Array<string>,
    setRoundNumber: React.Dispatch<React.SetStateAction<number>>,

}

export const Navbar: React.FC<INavbarProps> = ({ activeRoundNumber, roundsNames, setRoundNumber }) => {
  const roundOneSound = new Audio('/simple-game.mp3');
  const roundTwoSound = new Audio('/double-game.mp3');
  const roundThreeSound = new Audio('/triple-game.mp3');
  const roundFourSound = new Audio('/game-vice-versa.mp3');
  const roundFiveSound = new Audio('/big-game.mp3');
  const audioArray = [roundOneSound, roundTwoSound, roundThreeSound, roundFourSound, roundFiveSound];

  return (
    <nav className={classnameRoot}>
      <ul className={`${classnameRoot}__tab-wrapper`}>
        {
                roundsNames.map((round, index) => (
                  <Link
                    className={`${classnameRoot}__tab ${(+activeRoundNumber === +index)
                      ? `${classnameRoot}__tab_active` : ''}`}
                    key={round}
                    onClick={() => {
                      setRoundNumber(index);
                      audioArray[index].play();
                    }}
                    to={`${routePaths[index]}`}
                  >
                    { round }
                  </Link>
                ))
            }
      </ul>

    </nav>
  );
};
