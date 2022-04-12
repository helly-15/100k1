import React from "react";
import { Link } from "react-router-dom";
import "./MainMasonry.scss";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { gameTitles } from "../../../redux-state/reducers/gameTitlesReducer";
import { IStoreState } from "../../../redux-state/interfaces/IStore";
import { IGameTitles } from "../../../redux-state/interfaces/IGameTitles";

const classnameRoot = "main-masonry";

interface IMainMasonryProps {
  gameTitles: IGameTitles;
}
const cardAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2 },
  }),
};
const MotionLink = motion(Link);

export const MainMasonryComponent: React.FC<IMainMasonryProps> = () => (
  <motion.div
    className={`${classnameRoot}__wrapper`}
    initial="hidden"
    whileInView="visible"
  >
    {gameTitles.map((game, index) => (
      <MotionLink
        custom={index + 1}
        variants={cardAnimation}
        className={`${classnameRoot}__gamecard ${classnameRoot}__gamecard_${index}`}
        to={`gameTitle/${game.url}/roundchoice`}
        key={game.id}
      >
        <div className={`${classnameRoot}__gamecard_inner`}>
          <div className={`${classnameRoot}__gamecard_back`}>
            <h1>{game.title}</h1>
            <p>{game.description}</p>
          </div>
        </div>
      </MotionLink>
    ))}
  </motion.div>
);

export const MainMasonry = connect((state: IStoreState) => ({
  gameTitles: state.gameTitles,
}))(MainMasonryComponent);
