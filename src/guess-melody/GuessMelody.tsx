/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import guessmelodylogo from './assets/guessmelodylogo.png';
import './GuessMelody.scss';
import { Score } from "./score/Score";
import { Board } from "./board/Board";
import { data } from "./data";
import { Final } from "./final/Final";

const roundmusic = new Audio("/assets/guess-melody/game-sounds/round.mp3");

export const GuessMelody = () => {
    const [round, setRound] = useState(1);
    return (
        <div className="guess-melody">
            <header className="guess-melody-header">
                                <img src={ guessmelodylogo } className="guess-melody-logo" alt="logo"/>
                {round===1? <audio src ="/assets/guess-melody/game-sounds/opening.mp3" autoPlay />:null}
                { round !== 3 ? <Score/> : null }
                {
                    round === 1 ? <Board data={ data.questions[0] } round={ round }/> :
                        round === 2 ?
                            <Board data={ data.questions[1] } round={ round }/> :
                            <Final/>
                }
                <div className="guess-melody-button-wrapper">
                    <button className="guess-melody-button" type='button' onClick={ () => {
                        roundmusic.play();
                        setRound(1) }
                    }
                        > Раунд 1</button>
                    <button className="guess-melody-button" type='button' onClick={ () => {
                        roundmusic.play();
                        setRound(2)
                    } }> Раунд 2</button>
                    <button className="guess-melody-button" type='button' onClick={ () => {
                        roundmusic.play();
                        setRound(3)
                    } }> Финал </button>
                </div>
            </header>
        </div>
    );
}

