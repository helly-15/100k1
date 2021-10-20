import {RoundScore} from "../../components/round-score/RoundScore";
import {QuestionsBoard} from "../../components/questions-board/QuestionsBoard";
import './RoundWrapper.scss';

const classnameRoot = 'round-wrapper'


export const RoundWrapper = () => {
    return <main className={ classnameRoot }>
        <RoundScore score={ 100 }/>
        <div className={classnameRoot + '__questions-board_wrapper'}>
            <aside className={classnameRoot + '__questions-board_team'}>
                <RoundScore score={ 100 }/>
            </aside>
            <QuestionsBoard/>
            <aside className={classnameRoot + '__questions-board_team'}>
                <RoundScore score={ 100 }/>
            </aside>
        </div>

    </main>
}
