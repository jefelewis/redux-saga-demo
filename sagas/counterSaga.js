// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';

// Increase Counter Async
function* increaseCounterAsync() {
  try {
    // Delay 4 Seconds
    yield delay(4000);
  
    // Dispatch Action To Redux Store
    yield put({ 
      type: 'INCREASE_COUNTER_ASYNC',
      value: 1,
    });
  }
  catch (error) {
    // CHANGE LATER
    console.log(error);
  }
}

// Generator: Watch Increase Counter
export function* watchIncreaseCounter() {
  // // Take Every Action
  // yield takeEvery('INCREASE_COUNTER', increaseCounterAsync);

  // Take Last Action
  yield takeLatest('INCREASE_COUNTER', increaseCounterAsync);
}

// Decrease Counter Async
function* decreaseCounter() {
  try {
    // Delay 4 Seconds
    // yield delay(4000);
  
    // Dispatch Action To Redux Store
    yield put({ 
      type: 'DECREASE_COUNTER_ASYNC',
      value: 1,
    });
  }
  catch (error) {
    console.log(error);
  }
}

// Generator: Watch decrease Counter
export function* watchDecreaseCounter() {
  // // Take Every Action
  // yield takeEvery('DECREASE_COUNTER', decreaseCounter);

  // Take Last Action
  yield takeLatest('DECREASE_COUNTER', decreaseCounter);
}