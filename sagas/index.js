// Imports: Dependencies
import { all, fork } from 'redux-saga/effects';

// Imports: Redux Sagas
import { watchIncreaseCounter, watchDecreaseCounter } from './counterSaga';

// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(watchIncreaseCounter),
    fork(watchDecreaseCounter),
  ]);
};
