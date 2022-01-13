export interface IQuestion {
    id: number,
    title: string,
    correctReplies: Array<string>,
    repliesScores: Array<string>,
}

export interface IQuestions {
    questions: Array<IQuestion>
}
