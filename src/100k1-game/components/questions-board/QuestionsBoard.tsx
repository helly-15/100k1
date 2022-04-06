import "./QuestionsBoard.scss";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { MistakesCounter } from "../mistakes-counter/MistakesCounter";
import { RepliesList } from "../replies-list/RepliesList";

const classnameRoot = "questions-board";

export const routePaths = [
  "simplegame",
  "doublegame",
  "triplegame",
  "gameviceversa",
  "biggame",
];

interface IQuestionsBoardProps {
  setTotalScore: (arg0: number) => void;
  stageNumber: number;
  correctReplies: string[];
  repliesScores: string[];
  totalScore: number;
}

export const QuestionsBoard: React.FC<IQuestionsBoardProps> = ({
  stageNumber,
  correctReplies,
  repliesScores,
  totalScore,
  setTotalScore,
}) => {
  const [guessedReplies, setGuessedReplies] = useState<number[]>([]);
  const [repliesForStage, setRepliesForStage] = useState<string[]>([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
  ]);

  const setRepliesForStageOpened = (index: number) => {
    setRepliesForStage([
      ...repliesForStage.slice(0, index),
      correctReplies[index],
      ...repliesForStage.slice(index + 1),
    ]);
    setGuessedReplies([...guessedReplies, index]);
    setTotalScore(totalScore + Number(repliesScores[index]));
  };

  useEffect(() => {
    setGuessedReplies([]);
    setRepliesForStage(["1", "2", "3", "4", "5", "6"]);
  }, [stageNumber]);
  const repliesListComponent = (
    <RepliesList
      repliesForStage={repliesForStage}
      setRepliesForStageOpened={setRepliesForStageOpened}
      guessedReplies={guessedReplies}
      repliesScores={repliesScores}
    />
  );
  return (
    <div className={classnameRoot}>
      <MistakesCounter stageNumber={stageNumber} />
      <Switch>
        {["/100k1/", ...routePaths].map((route) => (
          <Route path={route} render={() => repliesListComponent} />
        ))}
      </Switch>
      <MistakesCounter stageNumber={stageNumber} />
    </div>
  );
};
