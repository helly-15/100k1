import './QuestionsBoard.scss';
import {MistakesCounter} from "../mistakes-counter/MistakesCounter";
import {RepliesList} from "../question-list/RepliesList";
import {useEffect, useState} from "react";
import {Route, Switch} from 'react-router-dom';

const classnameRoot = 'questions-board';

export const QuestionsBoard = (props) => {
    const {roundNumber, correctReplies, repliesScores} = props;
    const [guessedReplies, setGuessedReplies] = useState([]);
    const [repliesForRound, setRepliesForRound] = useState(['1', '2', '3', '4', '5', '6']);
    const setRepliesForRoundOpened = (index) => {
        setRepliesForRound([
            ...repliesForRound.slice(0, index),
            correctReplies[index],
            ...repliesForRound.slice(index + 1)
        ]);
        setGuessedReplies([
            ...guessedReplies,
            index
        ]);
       // console.log(props.totalScore + Number(repliesScores[index]));
        props.setTotalScore(props.totalScore + Number(repliesScores[index]));
        //console.log(props.totalScore)
    };

    useEffect(() => {
        setGuessedReplies([]);
        setRepliesForRound(['1', '2', '3', '4', '5', '6'])
    }, [roundNumber])

    return <div className={ classnameRoot }>
        <MistakesCounter roundNumber={ props.roundNumber }/>
        <Switch>
            <Route component={ () => {
                return <RepliesList repliesForRound={ repliesForRound }
                                    setRepliesForRoundOpened={ setRepliesForRoundOpened }
                                    correctReplies={ correctReplies }
                                    guessedReplies={ guessedReplies }
                                    repliesScores={ repliesScores }
                />
            } }
                   path={ '/simplegame' }/>
            <Route component={ () => {
                return <RepliesList repliesForRound={ repliesForRound }
                                    setRepliesForRoundOpened={ setRepliesForRoundOpened }
                                    correctReplies={ correctReplies }
                                    guessedReplies={ guessedReplies }
                                    repliesScores={ repliesScores }
                />
            } } path={ '/doublegame' }/>
            <Route component={ () => {
                return <RepliesList repliesForRound={ repliesForRound }
                                    setRepliesForRoundOpened={ setRepliesForRoundOpened }
                                    correctReplies={ correctReplies }
                                    guessedReplies={ guessedReplies }
                                    repliesScores={ repliesScores }
                />
            } } path={ '/triplegame' }/>
            <Route component={ () => {
                return <RepliesList repliesForRound={ repliesForRound }
                                    setRepliesForRoundOpened={ setRepliesForRoundOpened }
                                    correctReplies={ correctReplies }
                                    guessedReplies={ guessedReplies }
                                    repliesScores={ repliesScores }
                />
            } } path={ '/gameviceversa' }/>
            <Route component={ () => {
                return <RepliesList repliesForRound={ repliesForRound }
                                    setRepliesForRoundOpened={ setRepliesForRoundOpened }
                                    correctReplies={ correctReplies }
                                    guessedReplies={ guessedReplies }
                                    repliesScores={ repliesScores }
                />
            } } path={ '/biggame' }/>
        </Switch>

        <MistakesCounter roundNumber={ props.roundNumber }/>
    </div>
}
