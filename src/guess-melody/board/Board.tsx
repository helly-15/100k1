import './Board.css';
import React, { useState } from "react";

const rootClassname = 'board';
const playingSongs: Array<HTMLAudioElement> = [];

const leopold = new Audio("/assets/guess-melody/game-sounds/from-childhood/leopold.mp3");
const izumrudny = new Audio("/assets/guess-melody/game-sounds/from-childhood/izumrudny.mp3");
const secretToAllWorld = new Audio("/assets/guess-melody/game-sounds/from-childhood/secretToAllWorld.mp3");
const whiteSnowflakes = new Audio("/assets/guess-melody/game-sounds/from-childhood/whiteSnowflakes.mp3");
const durak = new Audio("/assets/guess-melody/game-sounds/KiSh/durak.mp3");
const kukla = new Audio("/assets/guess-melody/game-sounds/KiSh/kukla.mp3");
const lesnik = new Audio("/assets/guess-melody/game-sounds/KiSh/lesnik.mp3");
const marionetki = new Audio("/assets/guess-melody/game-sounds/KiSh/marionetki.mp3");
const metel = new Audio("/assets/guess-melody/game-sounds/2000/metel.mp3");
const polovinka = new Audio("/assets/guess-melody/game-sounds/2000/polovinka.mp3");
const rumka = new Audio("/assets/guess-melody/game-sounds/2000/rumka.mp3");
const takieDela = new Audio("/assets/guess-melody/game-sounds/2000/takieDela.mp3");
const alilya = new Audio("/assets/guess-melody/game-sounds/different/alilya.mp3");
const anastasia = new Audio("/assets/guess-melody/game-sounds/different/anastasia.mp3");
const kolokola = new Audio("/assets/guess-melody/game-sounds/different/kolokola.mp3");
const trubadur = new Audio("/assets/guess-melody/game-sounds/different/trubadur.mp3");

const bezteba = new Audio("/assets/guess-melody/game-sounds/about-love/bezteba.mp3");
const echo = new Audio("/assets/guess-melody/game-sounds/about-love/echo.mp3");
const lubi = new Audio("/assets/guess-melody/game-sounds/about-love/lubi.mp3");
const lublu = new Audio("/assets/guess-melody/game-sounds/about-love/lublu.mp3");
const kaby = new Audio("/assets/guess-melody/game-sounds/winter/kaby.mp3");
const novogodnaa = new Audio("/assets/guess-melody/game-sounds/winter/novogodnaa.mp3");
const snezinka = new Audio("/assets/guess-melody/game-sounds/winter/snezinka.mp3");
const zima = new Audio("/assets/guess-melody/game-sounds/winter/zima.mp3");
const beauty = new Audio("/assets/guess-melody/game-sounds/guess-animation/beauty.mp3");
const hero = new Audio("/assets/guess-melody/game-sounds/guess-animation/hero.mp3");
const korol = new Audio("/assets/guess-melody/game-sounds/guess-animation/korol.mp3");
const mermaid = new Audio("/assets/guess-melody/game-sounds/guess-animation/mermaid.mp3");
const uze = new Audio("/assets/guess-melody/game-sounds/songs-vice-versa/uze.mp3");
const kofeu = new Audio("/assets/guess-melody/game-sounds/songs-vice-versa/kofeu.mp3");
const olubvi = new Audio("/assets/guess-melody/game-sounds/songs-vice-versa/olubvi.mp3");
const vseravno = new Audio("/assets/guess-melody/game-sounds/songs-vice-versa/vseravno.mp3");
const note = new Audio("/assets/guess-melody/game-sounds/game-sounds/note.mp3");

interface IBoard {
    data:string[],
    round: number
}

export const Board:React.FC<IBoard> = ({data, round})=> {
    const [play, setPlay] = useState<boolean>(false);

    const playPauseSong = (elementSong: HTMLAudioElement): void => {
        setPlay(!play)
        if (play) {
            for (let i = 0; i < playingSongs.length; i +=1) playingSongs[i].pause();

        } else {
            note.play();
            setTimeout(()=>elementSong.play(),500)
            playingSongs.push(elementSong)
        }


    }

    const songsForRound = round === 1 ? [
        [leopold, izumrudny, secretToAllWorld, whiteSnowflakes],
        [durak, kukla, lesnik, marionetki],
        [metel, polovinka, rumka, takieDela],
        [alilya, anastasia, kolokola, trubadur]
    ] : [
        [bezteba, echo, lubi, lublu],
        [kaby, novogodnaa, snezinka, zima],
        [beauty, hero, korol, mermaid],
        [uze, kofeu, olubvi, vseravno]
    ]

    return (
        <div className={ rootClassname }>
            { data.map((question: string, index: number) => <div
                className={ `${rootClassname  }__question_wrapper` }
                                                                 key={ question }>
                    <div className={ `${rootClassname  }__question_text` }>
                        { question }
                    </div>

                    <button type="button" className={ `${rootClassname  }__question_note` } onClick={ (e) => {
                        playPauseSong(songsForRound[index][0]);
                        // @ts-ignore
                        if (!play)e.target.style.color = 'red'

                    } }
                            onKeyDown={(e) => {
                                playPauseSong(songsForRound[index][0]);
                                // @ts-ignore
                                if (!play)e.target.style.color = 'red'
                            }}>
                        ♩
                    </button>
                    <button type="button" className={ `${rootClassname  }__question_note` } onClick={ (e) => {
                        playPauseSong(songsForRound[index][1]);
                        // @ts-ignore
                        if (!play)e.target.style.color = 'red'
                    } }
                            onKeyDown={(e) => {
                                playPauseSong(songsForRound[index][0]);
                                // @ts-ignore
                                if (!play)e.target.style.color = 'red'
                            }}>
                        ♪
                    </button>
                    <button type="button" className={ `${rootClassname  }__question_note` } onClick={ (e) => {
                        playPauseSong(songsForRound[index][2]);
                        // @ts-ignore
                        if (!play)e.target.style.color = 'red'
                    } }
                            onKeyDown={(e) => {
                                playPauseSong(songsForRound[index][0]);
                                // @ts-ignore
                                if (!play)e.target.style.color = 'red'
                            }}>
                        ♫
                    </button>
                    <button type="button" className={ `${rootClassname  }__question_note` } onClick={ (e) => {
                        playPauseSong(songsForRound[index][3]);
                        // @ts-ignore
                        if (!play)e.target.style.color = 'red'
                    } }
                            onKeyDown={(e) => {
                                playPauseSong(songsForRound[index][0]);
                                // @ts-ignore
                                if (!play)e.target.style.color = 'red'
                            }}>
                        ♬
                    </button>
                </div>)
            }
        </div>
    )
}


