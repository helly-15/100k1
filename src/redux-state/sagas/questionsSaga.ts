import { questionApi } from "../../api/questionDataApi";
import { GET_DATA, GET_DATA_REQUESTED } from "../reducers/questionsReducer";
import { call, put, takeLatest } from 'redux-saga/effects';



function* fetchQuestions() {
    try {
        const {data: questionsData} = yield call(questionApi.fetchQuestionApi);
        yield put({type: GET_DATA, payload:questionsData});
    } catch (e) {
        //yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* fetchQuestionsSaga() {
    yield takeLatest(GET_DATA_REQUESTED , fetchQuestions);
}

export default fetchQuestionsSaga;
