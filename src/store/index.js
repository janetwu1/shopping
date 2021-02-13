import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.reducer'
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './sagas/root.saga'

const SagaMiddleWare = createSagaMiddleWare();

export const store = createStore(rootReducer, applyMiddleware(SagaMiddleWare))

SagaMiddleWare.run(rootSaga)