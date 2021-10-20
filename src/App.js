import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {RoundWrapper} from "./screen/round-wrapper/RoundWrapper";

const roundsNames = ['Простая игра', ' Двойная игра', 'Тройная игра', 'Игра наоборот', 'Большая игра']


function App() {
    return (
        <div className="App">
            <Navbar roundsNames={ roundsNames }/>

            <RoundWrapper/>
            <footer>

            </footer>
        </div>
    );
}

export default App;
