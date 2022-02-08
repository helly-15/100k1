import React from 'react';
import { Link } from 'react-router-dom';
import './MainMasonry.scss';
import { connect } from 'react-redux';
import { gameTitles } from '../../../redux-state/reducers/gameTitlesReducer';
import { IStoreState } from '../../../redux-state/interfaces/IStore';

const classnameRoot = 'main-masonry';

interface IMainMasonryProps {
  gameTitles:string[]
}

export const MainMasonryComponent: React.FC<IMainMasonryProps> = () => (
  <div className={`${classnameRoot}__wrapper`}>
    {gameTitles.map((item, index) => (
      <Link
        className={`${classnameRoot}__gamecard ${classnameRoot}__gamecard_${index}`}
        to="/100k1/"
        key={item}
      >

        <div className={`${classnameRoot}__gamecard_inner`}>

          <div className={`${classnameRoot}__gamecard_back`}>
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>

      </Link>

    ))}
  </div>
);

export const MainMasonry = connect((state: IStoreState) => ({
  gameTitles: state.gameTitles,
}))(MainMasonryComponent);
