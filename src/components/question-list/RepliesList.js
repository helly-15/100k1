import './RepliesList.scss';

const classnameRoot = 'replies-list';

export const RepliesList = (props) => {
    return <div className={ classnameRoot }>
        { props.repliesForRound.map((reply, index) => {
            return <button className={ classnameRoot + '__reply' }
                           onClick={ (e) => {
                               let replyAnswerSound = new Audio("/line_open.mp3");
                               replyAnswerSound.play();
                               e.target.style.backgroundColor = 'black';
                               e.target.firstChild.style.backgroundColor = 'black';
                               props.setRepliesForRoundOpened(index)
                           }
                           }
                           key={ 'reply-button' + index }
            >
                <div className={ classnameRoot + '__reply_answer' }>
                    { reply }
                </div>
            </button>
        }) }

    </div>
}
