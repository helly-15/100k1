import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {RoundWrapper} from "./screen/round-wrapper/RoundWrapper";
import {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {data} from "./data";

const roundsNames = ['Простая игра', ' Двойная игра', 'Тройная игра', 'Игра наоборот', 'Большая игра']


function App() {
    const [roundNumber, setRoundNumber] = useState([0]);
    const [totalScore, setTotalScore] = useState([0]);
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar roundsNames={ roundsNames }
                        setRoundNumber = {setRoundNumber}
                        activeRoundNumber = {roundNumber}
                        correctReplies = {data.questions[roundNumber].correctReplies || ['1', '2', '3', '4', '5', '6']}
                        repliesScores = {data.questions[roundNumber].repliesScores || ['1', '2', '3', '4', '5', '6']}
                        setTotalScore = {setTotalScore}
                        totalScore = {Number(totalScore)}
                />

                <RoundWrapper roundNumber = {roundNumber} totalScore = {totalScore} setTotalScore = {setTotalScore}/>
            </BrowserRouter>

        </div>
    );
}

export default App;
