import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {RoundWrapper} from "./screen/round-wrapper/RoundWrapper";
import {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";

import {ModalStarter} from "./modals/modal-starter/ModalStarter";
import {dataFromStore} from "./data";

const roundsNames = ['Простая игра', ' Двойная игра', 'Тройная игра', 'Игра наоборот', 'Большая игра']


function App() {
    const [roundNumber, setRoundNumber] = useState([0]);
    const [totalScore, setTotalScore] = useState([0]);
    const [modalShown, setModalShown] = useState(true);
    const [data, setData] = useState(dataFromStore);
//connect to backend. if no backend - comment useEffect
    useEffect(()=>{
        fetch('https://100k1back.netlify.app/api')

            .then(response=>
                console.log ( response)
                //response.json()
            )
            .then(data => setData (data))
    },[])
    //
    return (
        <div className="App">
            {modalShown ? <ModalStarter setModalShown = {setModalShown} /> :
                <BrowserRouter>
                    <Navbar roundsNames={ roundsNames }
                            setRoundNumber = {setRoundNumber}
                            activeRoundNumber = {roundNumber}
                            correctReplies = {data.questions[roundNumber].correctReplies || ['1', '2', '3', '4', '5', '6']}
                            repliesScores = {data.questions[roundNumber].repliesScores || ['1', '2', '3', '4', '5', '6']}
                            setTotalScore = {setTotalScore}
                            totalScore = {Number(totalScore)}
                    />

                    <RoundWrapper data = {data} roundNumber = {roundNumber} totalScore = {totalScore} setTotalScore = {setTotalScore}/>
                </BrowserRouter>
            }

            <button className={ 'button-timer' } onClick={()=>{
                let introSound = new Audio("/100-k-1-20-seconds.mp3");
                introSound.play();
            }
            }> ⏰</button>
        </div>
    );
}

export default App;
