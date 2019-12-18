import { put } from 'redux-saga/effects';
import { dropExchangeValues } from 'Redux/actions';

export default function* dropExchangeValuesSaga() {
  yield put(dropExchangeValues());
}
