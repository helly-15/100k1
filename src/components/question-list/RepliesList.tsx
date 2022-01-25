import './RepliesList.scss';
import React from 'react';

const classnameRoot = 'replies-list';

interface IRepliesListProps {
    guessedReplies: Array<number>,
    repliesForRound: Array<string>,
    setRepliesForRoundOpened:(index: number)=>void,
    repliesScores: Array<string>,
}

export const RepliesList: React.FC<IRepliesListProps> = ({
  guessedReplies, repliesForRound, setRepliesForRoundOpened, repliesScores,
}) => (
  <div className={classnameRoot}>
    { repliesForRound.map((reply, index) => {
      const isReplyGuessed = guessedReplies.includes(index);
      return (
        <button
          type="button"
          className={`${classnameRoot}__reply ${isReplyGuessed ? `${classnameRoot}__reply_answered` : ''}`}
          onClick={() => {
            const replyAnswerSound = new Audio('/line_open.mp3');
            replyAnswerSound.play();
            setRepliesForRoundOpened(index);
          }}
          key={Math.random()}
        >
          <div className={`${classnameRoot}__reply_answer ${isReplyGuessed
            ? `${classnameRoot}__reply_answer_answered` : ''}`}
          >
            { isReplyGuessed
              ? (
                <div className={`${classnameRoot}__reply_wrapper`}>
                  <span className={`${classnameRoot}__reply_text`}>
                    {reply}
                  </span>
                  <span className={`${classnameRoot}__reply_text`}>
                    { repliesScores[index]}
                  </span>
                </div>
              )
              : reply }
          </div>
        </button>
      );
    }) }

  </div>
);
