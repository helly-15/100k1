import './QuestionsBoard.scss';
import { MistakesCounter } from "../mistakes-counter/MistakesCounter";
import { RepliesList } from "../question-list/RepliesList";
import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';

const classnameRoot = 'questions-board';
const routePaths = ['/simplegame', '/doublegame', '/triplegame', '/gameviceversa', '/biggame']

interface IQuestionsBoardProps {
    setTotalScore: (arg0: number) => void,
    roundNumber: number,
    correctReplies: string[],
    repliesScores: string[],
    totalScore: number,
}

export const QuestionsBoard: React.FC<IQuestionsBoardProps> = (props) => {
    const {roundNumber, correctReplies, repliesScores} = props;
    const [guessedReplies, setGuessedReplies] = useState<number[]>([]);
    const [repliesForRound, setRepliesForRound] = useState<string[]>(['1', '2', '3', '4', '5', '6']);

    const setRepliesForRoundOpened = (index: number) => {
        setRepliesForRound([
            ...repliesForRound.slice(0, index),
            correctReplies[index],
            ...repliesForRound.slice(index + 1)
        ]);
        setGuessedReplies([
            ...guessedReplies,
            index
        ]);
        props.setTotalScore(props.totalScore + Number(repliesScores[index]));
    };

    useEffect(() => {
        setGuessedReplies([]);
        setRepliesForRound(['1', '2', '3', '4', '5', '6'])
    }, [roundNumber]);

    const repliesListComponent = <RepliesList repliesForRound={ repliesForRound }
                                              setRepliesForRoundOpened={ setRepliesForRoundOpened }
                                              guessedReplies={ guessedReplies }
                                              repliesScores={ repliesScores }
    />
    return <div className={ classnameRoot }>
        <MistakesCounter roundNumber={ props.roundNumber }/>
        <Switch>
            { routePaths.map((route) => {
                return <Route
                    key = {route}
                    component={ () => {
                    return repliesListComponent
                } }
                              path={ route }/>
            }) }
        </Switch>
        <MistakesCounter roundNumber={ props.roundNumber }/>
    </div>
}
