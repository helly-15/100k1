import './RepliesList.scss';

const classnameRoot = 'replies-list';

export const RepliesList = (props) => {

    return <div className={ classnameRoot }>
        { props.repliesForRound.map((reply, index) => {
            const isReplyGuessed = props.guessedReplies.includes(index);
            return <button className={ `${classnameRoot}__reply ${isReplyGuessed?classnameRoot+'__reply_answered':''}`}
                           onClick={ (e) => {
                               let replyAnswerSound = new Audio("/line_open.mp3");
                               replyAnswerSound.play();
                               props.setRepliesForRoundOpened(index)
                           }
                           }
                           key={ 'reply-button' + index }
            >
                <div className={ `${classnameRoot}__reply_answer ${isReplyGuessed?classnameRoot+'__reply_answer_answered':''}`}>
                    { isReplyGuessed?
                        <div className={ classnameRoot + '__reply_wrapper' }>
                            <span className={ classnameRoot + '__reply_text' }>
                             {reply}
                            </span>
                            <span className={ classnameRoot + '__reply_text' }>
                             { props.repliesScores[index]}
                            </span>
                        </div>
                        : reply }
                </div>
            </button>
        }) }

    </div>
}
