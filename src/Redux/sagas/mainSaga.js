import {
  all, call, put, takeEvery,
} from 'redux-saga/effects';
import {
  getPockets as getPocketsApi,
  getRates as getRatesApi,
} from 'API/requests';
import {
  setPockets,
  setRates,
} from 'Redux/actions';
import { GET_POCKETS, GET_RATES } from 'Constants/actionNames';
import { getFailureAction, getRequestAction, getSuccessAction } from 'Redux/shared';

function* getRates() {
  try {
    const rates = yield call(getRatesApi);
    yield put(getSuccessAction(GET_RATES, { rates }));
    yield put(setRates({ rates }));
  } catch (error) {
    yield put(getFailureAction(GET_RATES, { error }));
  }
}

function* getPockets() {
  try {
    const pockets = yield call(getPocketsApi);
    yield put(getSuccessAction(GET_POCKETS, { pockets }));
    yield put(setPockets({ pockets }));
  } catch (error) {
    yield put(getFailureAction(GET_POCKETS, { error }));
  }
}

export default function* mainSaga() {
  yield all([
    yield takeEvery(getRequestAction(GET_POCKETS).type, getPockets),
    yield takeEvery(getRequestAction(GET_RATES).type, getRates),
  ]);
}

