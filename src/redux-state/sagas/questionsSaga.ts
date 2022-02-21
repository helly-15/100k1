import { call, put, takeLatest } from 'redux-saga/effects';
import { questionApi } from '../../api/questionDataApi';
import { GET_DATA_100K1, GET_DATA_REQUESTED_100K1, SET_LOADING_100K1 } from '../reducers/questionsReducer';

function* fetchQuestions() {
  try {
    const { data: questionsData } = yield call(questionApi.fetchQuestionApi);
    yield put({ type: GET_DATA_100K1, payload: questionsData });
    yield put({ type: SET_LOADING_100K1, payload: false });
  } catch (e) {
    // yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* fetchQuestionsSaga() {
  yield takeLatest(GET_DATA_REQUESTED_100K1, fetchQuestions);
}

export default fetchQuestionsSaga;
