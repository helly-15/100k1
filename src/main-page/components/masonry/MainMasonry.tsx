import React from 'react';
import './MainMasonry.scss';
import { connect } from 'react-redux';
import { gameTitles } from '../../../redux-state/reducers/gameTitlesReducer';
import { IStoreState } from '../../../redux-state/interfaces/IStore';

const classnameRoot = 'main-masonry';

const gameFillers = ['./gamefiller1.jpg', './gamefiller2.jpg', './gamefiller3.jpg',
  './gamefiller4.jpg', './gamefiller5.jpg', './gamefiller6.png',
  './gamefiller7.png', './gamefiller8.jpg', './gamefiller9.jpg'];
interface IMainMasonryProps {
  gameTitles:string[]
}

export const MainMasonryComponent: React.FC<IMainMasonryProps> = () => (
  <div className={`${classnameRoot}__wrapper`}>
    {gameTitles.map((item, index) => (
      <div
        className={`${classnameRoot}__gamecard`}
      >
        <div className={`${classnameRoot}__gamecard_text`}>
          {item}
        </div>
        <img className={`${classnameRoot}__gamecard_img`} src={`${gameFillers[index]}`} alt="game logo" />
      </div>
    ))}
  </div>
);

export const MainMasonry = connect((state: IStoreState) => ({
  gameTitles: state.gameTitles,
}))(MainMasonryComponent);
