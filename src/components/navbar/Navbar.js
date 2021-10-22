import './Navbar.scss';
const classnameRoot = 'navbar';

export const Navbar = (props) => {
    const activeRoundNumber = props.activeRoundNumber
    return <nav className={classnameRoot}>
        <ul className={classnameRoot + '__tab-wrapper'}>
            {
                props.roundsNames.map((round,index) => <li className={ `${classnameRoot}__tab ${(+activeRoundNumber===+index)?classnameRoot+'__tab_active':''}`}
                                                   key={round}
                                                   onClick={(e)=>{
                                                       props.setRoundNumber(index)
                                                   }
                                                   }

                >
                    { round }
                </li>)
            }
            {

            }
        </ul>

    </nav>
}
