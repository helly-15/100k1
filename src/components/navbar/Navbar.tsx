import './Navbar.scss';
import { Link } from "react-router-dom";
import React from "react";

const classnameRoot = 'navbar';

interface INavbarProps {
    activeRoundNumber: number,
    roundsNames: Array<string>,
    setRoundNumber: React.Dispatch<React.SetStateAction<number>>,

}

export const Navbar: React.FC<INavbarProps> = ({activeRoundNumber, roundsNames, setRoundNumber}) => {
    const routes = ['simplegame', 'doublegame', 'triplegame', 'gameviceversa', 'biggame']
    let roundOneSound = new Audio("/simple-game.mp3");
    let roundTwoSound = new Audio("/double-game.mp3");
    let roundThreeSound = new Audio("/triple-game.mp3");
    let roundFourSound = new Audio("/game-vice-versa.mp3");
    let roundFiveSound = new Audio("/big-game.mp3");
    const audioArray = [roundOneSound, roundTwoSound, roundThreeSound, roundFourSound, roundFiveSound];

    return <nav className={ classnameRoot }>
        <ul className={ classnameRoot + '__tab-wrapper' }>
            {
                roundsNames.map((round, index) => <Link
                    className={ `${ classnameRoot }__tab ${ (+activeRoundNumber === +index) ? classnameRoot + '__tab_active' : '' }` }
                    key={ round }
                    onClick={ () => {
                        setRoundNumber(index);
                        audioArray[index].play();
                    }
                    }
                    to={ `/${ routes[index] }` }
                >
                    { round }
                </Link>)
            }
        </ul>

    </nav>
}
