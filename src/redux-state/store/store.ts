import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../reducers/rootReducer";
import fetchQuestionsSaga from "../sagas/questionsSaga";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key:'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);


sagaMiddleware.run(fetchQuestionsSaga);
