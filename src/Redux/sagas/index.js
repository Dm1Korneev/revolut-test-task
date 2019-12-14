import { all } from 'redux-saga/effects';
import mainSaga from './mainSaga';

export default function* rootSaga() {
  yield all([
    mainSaga(),
  ]);
}
