import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {RoundWrapper} from "./screen/round-wrapper/RoundWrapper";
import {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";

import {ModalStarter} from "./modals/modal-starter/ModalStarter";
//import {dataFromStore} from "./data";
import {connect} from "react-redux";
import {GET_DATA_REQUESTED} from "./redux-state/reducers/questionsReducer";


const roundsNames = ['Простая игра', ' Двойная игра', 'Тройная игра', 'Игра наоборот', 'Большая игра']


function AppComponent(props) {
    const [roundNumber, setRoundNumber] = useState([0]);
    const [totalScore, setTotalScore] = useState([0]);
    const [modalShown, setModalShown] = useState(true);
    const {questionsData, requestDataFetch} = props;
    //const data = dataFromStore;
    //const [data, setData] = useState(dataFromStore);
//connect to backend. if no backend - comment useEffect
    useEffect(() => {
        requestDataFetch()
    }, [])
    const data = questionsData;
    return (
        <div className="App">


            { modalShown ? <ModalStarter setModalShown={ setModalShown }/> :
                <BrowserRouter>
                    <Navbar roundsNames={ roundsNames }
                            setRoundNumber={ setRoundNumber }
                            activeRoundNumber={ roundNumber }
                            correctReplies={ data.questions[roundNumber].correctReplies || ['1', '2', '3', '4', '5', '6'] }
                            repliesScores={ data.questions[roundNumber].repliesScores || ['1', '2', '3', '4', '5', '6'] }
                            setTotalScore={ setTotalScore }
                            totalScore={ Number(totalScore) }
                    />
                    <img className={ 'main__tree' } src={ '/tree3.png' } alt={ 'new year fireworks' }/>
                    <img className={ 'main__tree_right' } src={ '/tree.png' } alt={ 'new year fireworks' }/>
                    <RoundWrapper data={ data } roundNumber={ roundNumber } totalScore={ totalScore }
                                  setTotalScore={ setTotalScore }/>
                </BrowserRouter>
            }

            <button className={ 'button-timer' } onClick={ () => {
                let introSound = new Audio("/100-k-1-20-seconds.mp3");
                introSound.play();
            }
            }> ⏰
            </button>
        </div>
    );
}

export const App = connect((state) => ({
    questionsData: state.questionsData.questionsData,
}), (dispatch) => {
    return {
        requestDataFetch: () => {
            dispatch({type: GET_DATA_REQUESTED});
        },
    };
})(AppComponent)
