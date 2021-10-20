import './Navbar.scss';
const classnameRoot = 'navbar';

export const Navbar = (props) => {
    return <nav className={classnameRoot}>
        <ul className={classnameRoot + '__tab-wrapper'}>
            {
                props.roundsNames.map(round => <li className={classnameRoot +'__tab'}>
                    { round }
                </li>)
            }
        </ul>

    </nav>
}
