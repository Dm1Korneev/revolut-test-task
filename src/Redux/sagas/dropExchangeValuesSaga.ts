import { put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { dropExchangeValues } from 'Redux/actions';

export default function* dropExchangeValuesSaga(): SagaIterator {
  yield put(dropExchangeValues());
}
