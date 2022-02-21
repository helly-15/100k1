import '../App.css';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Navbar } from './components/navbar/Navbar';
import { RoundWrapperConnected } from './screen/round-wrapper/RoundWrapper';
import { ModalStarter } from './modals/modal-starter/ModalStarter';
import { GET_DATA_REQUESTED_100K1, SET_LOADING_100K1 } from '../redux-state/reducers/questionsReducer';
import { IStoreState } from '../redux-state/interfaces/IStore';
import { IQuestionsData } from '../redux-state/interfaces/IQuestion';

interface IAppComponentStateProps {
    questionsData: IQuestionsData,
    isQuestionsLoading: boolean,
    requestDataFetch: () => void,
}

const roundsNames = ['Простая игра', ' Двойная игра', 'Тройная игра', 'Игра наоборот', 'Большая игра'];

export const App100k1Component: React.FC<IAppComponentStateProps> = ({
  questionsData,
  isQuestionsLoading,
  requestDataFetch,
}) => {
  const [roundNumber, setRoundNumber] = useState<number>(0);

  useEffect(() => {
    requestDataFetch();
  }, []);
  return (
    <div className="App">
      { isQuestionsLoading ? <ModalStarter />
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

export const App100k1: React.FC = connect((state: IStoreState) => ({
  questionsData: state.questionsData.questionsData,
  isQuestionsLoading: state.questionsData.loading,
}), (dispatch) => ({
  requestDataFetch: () => {
    dispatch({ type: GET_DATA_REQUESTED_100K1 });
    dispatch({ type: SET_LOADING_100K1, payload: true });
  },
}))(App100k1Component);
