import { all, fork } from "redux-saga/effects";
import { watchGetUser } from "../container/users/sagas";

const rootSaga = function* () {
  yield all([
    fork(watchGetUser),
    // Other forks
  ]);
};

export default rootSaga;