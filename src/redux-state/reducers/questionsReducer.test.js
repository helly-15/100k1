import {GET_DATA, questionsReducer} from "./questionsReducer";

const mockStoreStart = {
    questionsData: {
        questions: [
            {
                id: 1,
                title: 'Какой жест очень часто снимает фотограф?',
                correctReplies: ['Ok', 'Привет', 'Поцелуй', ' Воинское приветствие', 'Рожки', 'Рукопожатие'],
                repliesScores: ['27', '19', '16', ' 13', '10', '5'],
            },
        ]
    }

}
const mockStoreEnd = {
    questions: [
        {
            id: 1,
            title: 'Тест2?',
            correctReplies: ['Ok', 'Привет', 'Поцелуй', ' Воинское приветствие', 'Рожки', 'Рукопожатие'],
            repliesScores: ['27', '19', '16', ' 13', '10', '5'],
        },
    ]
}


it('store should be updated with question data and not extend', () => {
    let newState = questionsReducer(mockStoreStart, {type: GET_DATA, payload: mockStoreEnd});

    expect(newState.questionsData.questions.length).toBe(1);
})

it('store should include only payload info', () => {
    let newState = questionsReducer(mockStoreStart, {type: GET_DATA, payload: mockStoreEnd});

    expect(newState.questionsData.questions[0].title).toBe('Тест2?');
})
