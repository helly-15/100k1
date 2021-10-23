import './Navbar.scss';
import {Link} from "react-router-dom";
// import {RepliesList} from "../question-list/RepliesList";
// import {useState} from "react";

const classnameRoot = 'navbar';

export const Navbar = (props) => {
    const routes = ['simplegame', 'doublegame', 'triplegame', 'gameviceversa', 'biggame']
    const activeRoundNumber = props.activeRoundNumber;
    let roundOneSound = new Audio("/simple-game.mp3");
    let roundTwoSound = new Audio("/double-game.mp3");
    let roundThreeSound = new Audio("/triple-game.mp3");
    let roundFourSound = new Audio("/game-vice-versa.mp3");
    let roundFiveSound = new Audio("/big-game.mp3");
    const audioArray = [roundOneSound, roundTwoSound, roundThreeSound, roundFourSound, roundFiveSound];

    return <nav className={ classnameRoot }>
        <ul className={ classnameRoot + '__tab-wrapper' }>
            {
                props.roundsNames.map((round, index) => <Link
                    className={ `${ classnameRoot }__tab ${ (+activeRoundNumber === +index) ? classnameRoot + '__tab_active' : '' }` }
                    key={ round }
                    onClick={ (e) => {
                        props.setRoundNumber(index);
                        audioArray[index].play();
                    }
                    }
                    to={ `/${ routes[index] }` }
                >
                    { round }
                </Link>)
            }
            {

            }
        </ul>

    </nav>
}
