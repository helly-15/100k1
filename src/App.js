import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {RoundScore} from "./components/roundScore/RoundScore";

const roundsNames = ['Простая игра', ' Двойная игра', 'Тройная игра', 'Игра наоборот', 'Большая игра']

function App() {
    return (
        <div className="App">
            <Navbar roundsNames={ roundsNames }/>

            <main className={'round-wrapper'}>
                <RoundScore score={ 100 }/>
                <aside>

                </aside>
                <body>

                </body>
                <aside>

                </aside>
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default App;
