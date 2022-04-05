import React from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { IStoreState } from "../../../redux-state/interfaces/IStore";
import { IGameTitles } from "../../../redux-state/interfaces/IGameTitles";
import "./RoundChoice.scss";

const classnameRoot = "round-choice";

interface IRoundChoice {
  gameTitles: IGameTitles;
}

const RoundChoiceComponent: React.FC<IRoundChoice> = ({ gameTitles }) => {
  const { gameTitle }: { gameTitle: string } = useParams();
  const { t } = useTranslation();
  return (
    <div className={`${classnameRoot}`}>
      <div className={`${classnameRoot}__title`}> {t("chooseround")} </div>
      <div className={`${classnameRoot}__options`}>
        {[
          ...Array(
            gameTitles.find((game) => game.url === gameTitle)?.numberOfRounds
          ),
        ].map((round, index) => (
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
        ))}
      </div>
    </div>
  );
};

export const RoundChoice = connect((state: IStoreState) => ({
  gameTitles: state.gameTitles,
}))(RoundChoiceComponent);
