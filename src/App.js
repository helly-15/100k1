import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {RoundWrapper} from "./screen/round-wrapper/RoundWrapper";
import {useState} from "react";

const roundsNames = ['Простая игра', ' Двойная игра', 'Тройная игра', 'Игра наоборот', 'Большая игра']


function App() {
    const [roundNumber, setRoundNumber] = useState([0]);
    return (
        <div className="App">
            <Navbar roundsNames={ roundsNames } setRoundNumber = {setRoundNumber} activeRoundNumber = {roundNumber}/>

            <RoundWrapper roundNumber = {roundNumber}/>
            <footer>

            </footer>
        </div>
    );
}

export default App;
