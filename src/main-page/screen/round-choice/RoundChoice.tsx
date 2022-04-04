import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { IStoreState } from '../../../redux-state/interfaces/IStore';
import { IGameTitles } from '../../../redux-state/interfaces/IGameTitles';
import './RoundChoice.scss';

const classnameRoot = 'round-choice';

interface IRoundChoice {
    gameTitles:IGameTitles
}

const RoundChoiceComponent:React.FC<IRoundChoice> = ({ gameTitles }) => {
  const { gameTitle }:{gameTitle:string} = useParams();
  return (
    <div className={`${classnameRoot}`}>
      {
            [...Array(gameTitles.find((game) => game.url === gameTitle)?.numberOfRounds)]
              .map((round, index) => (
                <div className={`${classnameRoot}__wrapper`}>
                  <Link
                    to={`/${gameTitle}/round/${index}`}
                    className={`${classnameRoot}__button`}
                    key={gameTitle}
                  >

                    <div className={`${classnameRoot}__dots-container`}>
                      <div className={`${classnameRoot}__dot`} />
                      <div className={`${classnameRoot}__dot`} />
                      <div className={`${classnameRoot}__dot`} />
                      <div className={`${classnameRoot}__dot`} />
                    </div>
                    <span>{index + 1}</span>
                  </Link>
                </div>
              ))
        }

    </div>
  );
};

export const RoundChoice = connect((state: IStoreState) => ({
  gameTitles: state.gameTitles,
}))(RoundChoiceComponent);
