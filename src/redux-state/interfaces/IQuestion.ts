export type IQuestion = {
    id: number,
    title: string,
    correctReplies: Array<string>,
    repliesScores: Array<string>,
}
export interface IQuestionsData {
    questions: Array<IQuestion>;
}
export interface IQuestions {
    questionsData: IQuestionsData;
    loading: boolean;
}
