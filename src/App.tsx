import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar } from './components/navbar/Navbar';
import { RoundWrapperConnected } from './screen/round-wrapper/RoundWrapper';
import { ModalStarter } from './modals/modal-starter/ModalStarter';
import { GET_DATA_REQUESTED } from './redux-state/reducers/questionsReducer';
import { IStoreState } from './redux-state/interfaces/IStore';
import { IQuestionsData } from './redux-state/interfaces/IQuestion';

interface IAppComponentStateProps {
    questionsData: IQuestionsData,
    requestDataFetch: () => void,
}

const roundsNames = ['Простая игра', ' Двойная игра', 'Тройная игра', 'Игра наоборот', 'Большая игра'];

export const AppComponent = (props: IAppComponentStateProps) => {
  const [roundNumber, setRoundNumber] = useState<number>(0);
  const [modalShown, setModalShown] = useState<boolean>(true);
  const { questionsData, requestDataFetch } = props;
  useEffect(() => {
    requestDataFetch();
  }, []);
  return (
    <div className="App">
      { modalShown ? <ModalStarter setModalShown={setModalShown} />
        : (
          <BrowserRouter>
            <Navbar
              roundsNames={roundsNames}
              setRoundNumber={setRoundNumber}
              activeRoundNumber={roundNumber}
            />
            <RoundWrapperConnected data={questionsData} roundNumber={roundNumber} />
          </BrowserRouter>
        ) }
      <button
        type="button"
        className="button-timer"
        onClick={() => {
          const introSound = new Audio('/100-k-1-20-seconds.mp3');
          introSound.play();
        }}
      >
        { ' ' }
        ⏰
      </button>
    </div>
  );
};

export const App: React.FC = connect((state: IStoreState) => ({
  questionsData: state.questionsData.questionsData,
}), (dispatch) => ({
  requestDataFetch: () => {
    dispatch({ type: GET_DATA_REQUESTED });
  },
}))(AppComponent);
