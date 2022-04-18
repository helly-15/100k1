/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import {connect} from "react-redux";
import {useTranslation} from "react-i18next";
import guessmelodylogo from './assets/guessmelodylogo.png';
import guessmelodylogoen from './assets/guessmelodylogoen.png';
import './GuessMelody.scss';
import { Score } from "./score/Score";
import { Board } from "./board/Board";
import { data } from "./data";
import { Final } from "./final/Final";
import {IStoreState} from "../redux-state/interfaces/IStore";

interface IGuessMelody {
    locale: string;
}

const roundmusic = new Audio("/assets/guess-melody/game-sounds/round.mp3");
const roundsNumbers = ['first', 'second','final']

export const GuessMelodyComponent:React.FC<IGuessMelody> = ({locale}) => {
    const [round, setRound] = useState(1);
    const { t } = useTranslation();

    return (
        <div className="guess-melody">
            <header className="guess-melody-header">
                <img src={ locale === "en"?guessmelodylogoen:guessmelodylogo }
                     className="guess-melody-logo" alt="logo"/>
                {round===1? <audio src ="/assets/guess-melody/game-sounds/opening.mp3" autoPlay />:null}
                { round !== 3 ? <Score/> : null }
                {
                    round !== 3 ? <Board data={ data.questions[round - 1] } round={ round }/> : <Final/>
                }
                <div className="guess-melody-button-wrapper">
                    {roundsNumbers.map((roundNumber, index) => <button
                        className="guess-melody-button" key = {roundNumber} type='button' onClick={ () => {
                            roundmusic.play();
                            setRound(index+1) }
                        }> {index!==2? `${t(`${"round"}`)} ${index+1}`: t(`${"final"}`)}
                        </button>

                    )}
                </div>
            </header>
        </div>
    );
}

export const GuessMelody = connect(
    (state: IStoreState) => ({
        locale: state.locale.locale,
    }),
)(GuessMelodyComponent);