import "./Navbar.scss";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { routePaths } from "../questions-board/QuestionsBoard";

const classnameRoot = "navbar";

interface INavbarProps {
  activeStageNumber: number;
  stageNames: Array<string>;
  setStageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export const Navbar: React.FC<INavbarProps> = ({
  activeStageNumber,
  stageNames,
  setStageNumber,
}) => {
  const stageOneSound = new Audio("/simple-game.mp3");
  const stageTwoSound = new Audio("/double-game.mp3");
  const stageThreeSound = new Audio("/triple-game.mp3");
  const stageFourSound = new Audio("/game-vice-versa.mp3");
  const stageFiveSound = new Audio("/big-game.mp3");
  const { round }: { round: string } = useParams();
  const audioArray = [
    stageOneSound,
    stageTwoSound,
    stageThreeSound,
    stageFourSound,
    stageFiveSound,
  ];

  return (
    <nav className={classnameRoot}>
      <ul className={`${classnameRoot}__tab-wrapper`}>
        {stageNames.map((stage, index) => (
          <Link
            className={`${classnameRoot}__tab ${
              +activeStageNumber === +index
                ? `${classnameRoot}__tab_active`
                : ""
            }`}
            key={stage}
            onClick={() => {
              setStageNumber(index);
              audioArray[index].play();
            }}
            to={`/100k1/round/${round}/${routePaths[index]}`}
          >
            {stage}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
