import './QuestionsBoard.scss';
import { MistakesCounter } from "../mistakes-counter/MistakesCounter";
import { RepliesList } from "../question-list/RepliesList";
import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';

const classnameRoot = 'questions-board';

interface IQuestionsBoardProps {
    setTotalScore: React.Dispatch<React.SetStateAction<number>>
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
    }, [roundNumber])
//toDo fix code replication
    return <div className={ classnameRoot }>
        <MistakesCounter roundNumber={ props.roundNumber }/>
        <Switch>
            <Route component={ () => {
                return <RepliesList repliesForRound={ repliesForRound }
                                    setRepliesForRoundOpened={ setRepliesForRoundOpened }
                                    guessedReplies={ guessedReplies }
                                    repliesScores={ repliesScores }
                />
            } }
                   path={ '/simplegame' }/>

            <Route component={ () => {
                return <RepliesList repliesForRound={ repliesForRound }
                                    setRepliesForRoundOpened={ setRepliesForRoundOpened }
                                    guessedReplies={ guessedReplies }
                                    repliesScores={ repliesScores }
                />
            } }
                   path={ '/' }/>
            <Route component={ () => {
                return <RepliesList repliesForRound={ repliesForRound }
                                    setRepliesForRoundOpened={ setRepliesForRoundOpened }
                                    guessedReplies={ guessedReplies }
                                    repliesScores={ repliesScores }
                />
            } } path={ '/doublegame' }/>
            <Route component={ () => {
                return <RepliesList repliesForRound={ repliesForRound }
                                    setRepliesForRoundOpened={ setRepliesForRoundOpened }
                                    guessedReplies={ guessedReplies }
                                    repliesScores={ repliesScores }
                />
            } } path={ '/triplegame' }/>
            <Route component={ () => {
                return <RepliesList repliesForRound={ repliesForRound }
                                    setRepliesForRoundOpened={ setRepliesForRoundOpened }
                                    guessedReplies={ guessedReplies }
                                    repliesScores={ repliesScores }
                />
            } } path={ '/gameviceversa' }/>
            <Route component={ () => {
                return <RepliesList repliesForRound={ repliesForRound }
                                    setRepliesForRoundOpened={ setRepliesForRoundOpened }
                                    guessedReplies={ guessedReplies }
                                    repliesScores={ repliesScores }
                />
            } } path={ '/biggame' }/>
        </Switch>

        <MistakesCounter roundNumber={ props.roundNumber }/>
    </div>
}
