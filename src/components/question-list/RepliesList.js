import './RepliesList.scss';

const classnameRoot = 'replies-list';

export const RepliesList = (props) => {
    return <div className={ classnameRoot }>
        { props.repliesForRound.map(reply => {
            return <button className={ classnameRoot + '__reply' }>
                <div className={ classnameRoot + '__reply_answer' }>{ reply } </div>
            </button>
        }) }

    </div>
}
