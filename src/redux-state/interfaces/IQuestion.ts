
export interface IQuestions {
    questionsData: IQuestionsData;
}

export interface IQuestionsData {
    questions: Array<IQuestion>;
}

export type IQuestion = {
    id: number,
    title: string,
    correctReplies: Array<string>,
    repliesScores: Array<string>,
}
