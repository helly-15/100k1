import './App100k1.scss';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { Navbar } from './components/navbar/Navbar';
import { RoundWrapperConnected } from './screen/round-wrapper/RoundWrapper';
import { FallbackLoading } from './modals/fallback-loading/FallbackLoading';
import { GET_DATA_REQUESTED_100K1, SET_LOADING_100K1 } from '../redux-state/reducers/questionsReducer';
import { IStoreState } from '../redux-state/interfaces/IStore';
import { IQuestionsData } from '../redux-state/interfaces/IQuestion';
import { ErrorBoundary } from '../main-page/reuse-components/error-boundary/ErrorBoundary';

interface IAppComponentStateProps {
    questionsData: IQuestionsData,
    isQuestionsLoading: boolean,
    requestDataFetch: () => void,
}

export const App100k1Component: React.FC<IAppComponentStateProps> = ({
  questionsData,
  isQuestionsLoading,
  requestDataFetch,
}) => {
  const [roundNumber, setRoundNumber] = useState<number>(0);
  const { t } = useTranslation();
  const roundsNames = [t('simple'), t('double'),
    t('triple'), t('viceversa'), t('big')];
  useEffect(() => {
    requestDataFetch();
  }, []);
  return (
    <div className="App">
      { isQuestionsLoading ? <FallbackLoading />
        : (
          <>
            <Navbar
              roundsNames={roundsNames}
              setRoundNumber={setRoundNumber}
              activeRoundNumber={roundNumber}
            />
            <RoundWrapperConnected data={questionsData} roundNumber={roundNumber} />
          </>

        ) }
    </div>
  );
};

const withErrorBoundaryApp100k1 = withErrorBoundary(App100k1Component, {
  fallback: <ErrorBoundary />,
});

export const App100k1: React.FC = connect((state: IStoreState) => ({
  questionsData: state.questionsData.questionsData,
  isQuestionsLoading: state.questionsData.loading,
}), (dispatch) => ({
  requestDataFetch: () => {
    dispatch({ type: GET_DATA_REQUESTED_100K1 });
    dispatch({ type: SET_LOADING_100K1, payload: true });
  },
}))(withErrorBoundaryApp100k1);
