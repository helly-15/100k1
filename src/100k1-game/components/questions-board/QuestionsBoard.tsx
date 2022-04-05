import "./QuestionsBoard.scss";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { MistakesCounter } from "../mistakes-counter/MistakesCounter";
import { RepliesList } from "../replies-list/RepliesList";

const classnameRoot = "questions-board";

export const routePaths = [
  "/100k1/simplegame",
  "/100k1/doublegame",
  "/100k1/triplegame",
  "/100k1/gameviceversa",
  "/100k1/biggame",
];

interface IQuestionsBoardProps {
  setTotalScore: (arg0: number) => void;
  roundNumber: number;
  correctReplies: string[];
  repliesScores: string[];
  totalScore: number;
}

export const QuestionsBoard: React.FC<IQuestionsBoardProps> = ({
  roundNumber,
  correctReplies,
  repliesScores,
  totalScore,
  setTotalScore,
}) => {
  const [guessedReplies, setGuessedReplies] = useState<number[]>([]);
  const [repliesForRound, setRepliesForRound] = useState<string[]>([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
  ]);

  const setRepliesForRoundOpened = (index: number) => {
    setRepliesForRound([
      ...repliesForRound.slice(0, index),
      correctReplies[index],
      ...repliesForRound.slice(index + 1),
    ]);
    setGuessedReplies([...guessedReplies, index]);
    setTotalScore(totalScore + Number(repliesScores[index]));
  };

  useEffect(() => {
    setGuessedReplies([]);
    setRepliesForRound(["1", "2", "3", "4", "5", "6"]);
  }, [roundNumber]);
  const repliesListComponent = (
    <RepliesList
      repliesForRound={repliesForRound}
      setRepliesForRoundOpened={setRepliesForRoundOpened}
      guessedReplies={guessedReplies}
      repliesScores={repliesScores}
    />
  );
  return (
    <div className={classnameRoot}>
      <MistakesCounter roundNumber={roundNumber} />
      <Switch>
        {["/100k1/", ...routePaths].map((route) => (
          <Route path={route} render={() => repliesListComponent} />
        ))}
      </Switch>
      <MistakesCounter roundNumber={roundNumber} />
    </div>
  );
};
