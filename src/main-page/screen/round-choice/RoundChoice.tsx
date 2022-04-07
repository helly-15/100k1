import React from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { IStoreState } from "../../../redux-state/interfaces/IStore";
import { IGameTitles } from "../../../redux-state/interfaces/IGameTitles";
import "./RoundChoice.scss";
import { dataEn } from "../../../100k1-game/dataEn";
import { dataRu } from "../../../100k1-game/dataRu";
import { GET_DATA_100K1 } from "../../../redux-state/reducers/questionsReducer";
import {
  ILocaleQuestionsData,
  IQuestionsData,
} from "../../../redux-state/interfaces/IQuestion";

const classnameRoot = "round-choice";

interface IRoundChoice {
  gameTitles: IGameTitles;
  locale: string;
  getRoundData: (data: IQuestionsData) => void;
}

const RoundChoiceComponent: React.FC<IRoundChoice> = ({
  gameTitles,
  locale,
  getRoundData,
}) => {
  const { gameTitle }: { gameTitle: string } = useParams();
  const { t } = useTranslation();
  const gameData: ILocaleQuestionsData = locale === "en" ? dataEn : dataRu;
  return (
    <div className={`${classnameRoot}`}>
      <div className={`${classnameRoot}__title`}> {t("chooseround")} </div>
      <div className={`${classnameRoot}__options`}>
        {[
          ...Array(
            gameTitles.find((game) => game.url === gameTitle)?.numberOfRounds
          ),
        ].map((round, index: number) => (
          <div className={`${classnameRoot}__wrapper`}>
            <Link
              to={`/${gameTitle}/round/${index}`}
              className={`${classnameRoot}__button`}
              key={gameTitle}
              onClick={() => getRoundData(gameData[index])}
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

export const RoundChoice = connect(
  (state: IStoreState) => ({
    gameTitles: state.gameTitles,
    locale: state.locale.locale,
  }),
  (dispatch) => ({
    getRoundData: (data: IQuestionsData) => {
      dispatch({ type: GET_DATA_100K1, payload: data });
    },
  })
)(RoundChoiceComponent);
