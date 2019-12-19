import { all, takeEvery } from 'redux-saga/effects';
import {
  CHANGE_POCKETS, CHANGE_RECEIVE_VALUE, CHANGE_WRITE_OFF_VALUE,
  EXCHANGE, GET_POCKETS, GET_RATES, SET_POCKET_FROM, SET_POCKET_TO,
} from 'Constants/actionNames';
import { getRequestAction, getSuccessAction } from 'Redux/shared';

import getPocketsSaga from './getPocketsSaga';
import getRatesSaga from './getRatesSaga';
import changeWriteOffValueSaga from './changeWriteOffValueSaga';
import changeReceiveValueSaga from './changeReceiveValueSaga';
import exchangeSaga from './exchangeSaga';
import dropExchangeValuesSaga from './dropExchangeValuesSaga';

export default function* rootSaga(): Iterator<any> {
  yield all([
    yield takeEvery(getRequestAction(GET_POCKETS).type, getPocketsSaga),
    yield takeEvery(getRequestAction(GET_RATES).type, getRatesSaga),
    yield takeEvery(CHANGE_WRITE_OFF_VALUE, changeWriteOffValueSaga),
    yield takeEvery(CHANGE_RECEIVE_VALUE, changeReceiveValueSaga),
    yield takeEvery(getRequestAction(EXCHANGE).type, exchangeSaga),
    yield takeEvery(getSuccessAction(EXCHANGE).type, dropExchangeValuesSaga),
    yield takeEvery(SET_POCKET_FROM, dropExchangeValuesSaga),
    yield takeEvery(SET_POCKET_TO, dropExchangeValuesSaga),
    yield takeEvery(CHANGE_POCKETS, dropExchangeValuesSaga),
  ]);
}
