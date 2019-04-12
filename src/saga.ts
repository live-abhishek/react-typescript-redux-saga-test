import { all, delay, put, takeEvery } from "redux-saga/effects";

export function* helloSaga(): any {
  console.log("Hello Sagas!");
}

// This saga will perform Async increment task
export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

// Spawn new Increment Async task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
