import "./App100k1.scss";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { StageWrapperConnected } from "./screen/stage-wrapper/StageWrapper";
import { FallbackLoading } from "./modals/fallback-loading/FallbackLoading";
import {
  GET_DATA_REQUESTED_100K1,
  SET_LOADING_100K1,
  SET_ROUNDNUMBER_100K1,
} from "../redux-state/reducers/questionsReducer";
import { IStoreState } from "../redux-state/interfaces/IStore";
import { IQuestionsData } from "../redux-state/interfaces/IQuestion";
import { ErrorBoundary } from "../main-page/reuse-components/error-boundary/ErrorBoundary";

interface IAppComponentStateProps {
  questionsData: IQuestionsData;
  isQuestionsLoading: boolean;
  locale: string;
  requestDataFetch: () => void;
  setRoundNumber: (round: number) => void;
}

export const App100k1Component: React.FC<IAppComponentStateProps> = ({
  questionsData,
  isQuestionsLoading,
  requestDataFetch,
  setRoundNumber,
  // locale,
}) => {
  const [stageNumber, setStageNumber] = useState<number>(0);
  const { t } = useTranslation();
  const { round }: { round: string } = useParams();
  const stageNames = [
    t("simple"),
    t("double"),
    t("triple"),
    t("viceversa"),
    t("big"),
  ];
  useEffect(() => {
    // if(locale === 'ru' && Number(round)===0) {
    requestDataFetch();
    // }

    setRoundNumber(Number(round));
  }, []);
  return (
    <div className="App">
      {isQuestionsLoading ? (
        <FallbackLoading />
      ) : (
        <>
          <Navbar
            stageNames={stageNames}
            setStageNumber={setStageNumber}
            activeStageNumber={stageNumber}
          />
          <StageWrapperConnected
            data={questionsData}
            stageNumber={stageNumber}
          />
        </>
      )}
    </div>
  );
};

const withErrorBoundaryApp100k1 = withErrorBoundary(App100k1Component, {
  fallback: <ErrorBoundary />,
});

export const App100k1: React.FC = connect(
  (state: IStoreState) => ({
    questionsData: state.questionsData.questionsData,
    isQuestionsLoading: state.questionsData.loading,
    locale: state.locale.locale,
  }),
  (dispatch) => ({
    requestDataFetch: () => {
      dispatch({ type: GET_DATA_REQUESTED_100K1 });
      dispatch({ type: SET_LOADING_100K1, payload: true });
    },
    setRoundNumber: (roundNumber: number) => {
      dispatch({ type: SET_ROUNDNUMBER_100K1, payload: roundNumber });
    },
  })
)(withErrorBoundaryApp100k1);
