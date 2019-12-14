import {
  all, call, put, select, takeEvery,
} from 'redux-saga/effects';
import {
  getPockets as getPocketsApi,
  getRates as getRatesApi,
} from 'API/requests';
import {
  dropExchangeValues,
  setPockets,
  setRates,
  setReceiveValue,
  setWriteOffValue,
} from 'Redux/actions';
import {
  CHANGE_RECEIVE_VALUE, CHANGE_WRITE_OFF_VALUE, EXCHANGE, GET_POCKETS, GET_RATES,
} from 'Constants/actionNames';
import { getFailureAction, getRequestAction, getSuccessAction } from 'Redux/shared';
import {
  pocketFromCurrencySelector, pocketFromValueSelector, pocketToCurrencySelector, pocketToValueSelector, rateSelector, writeOffValueSelector,
} from 'Selectors/session';
import { roundPlus } from 'Helpers';

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
    yield put(setPockets({ pockets }));
    yield put(getSuccessAction(GET_POCKETS, { pockets }));
  } catch (error) {
    yield put(getFailureAction(GET_POCKETS, { error }));
  }
}

function* changeWriteOffValue(action) {
  const writeOffValue = action.payload;
  const currencyFrom = yield select(pocketFromCurrencySelector);
  const currencyTo = yield select(pocketToCurrencySelector);
  const rate = yield select(rateSelector, currencyFrom, currencyTo);

  const receiveValue = roundPlus(writeOffValue * rate);

  yield all([
    put(setWriteOffValue(writeOffValue)),
    put(setReceiveValue(receiveValue)),
  ]);
}

function* changeReceiveValue(action) {
  const receiveValue = action.payload;
  const currencyFrom = yield select(pocketFromCurrencySelector);
  const currencyTo = yield select(pocketToCurrencySelector);
  const rate = yield select(rateSelector, currencyTo, currencyFrom);

  const writeOffValue = roundPlus(receiveValue * rate);

  yield all([
    put(setWriteOffValue(writeOffValue)),
    put(setReceiveValue(receiveValue)),
  ]);
}

function* exchange() {
  const writeOffValue = yield select(writeOffValueSelector);
  const currencyFrom = yield select(pocketFromCurrencySelector);
  const currencyTo = yield select(pocketToCurrencySelector);
  const pocketFromValue = yield select(pocketFromValueSelector);
  const pocketFToValue = yield select(pocketToValueSelector);
  const rate = yield select(rateSelector, currencyFrom, currencyTo);
  const receiveValue = roundPlus(writeOffValue * rate);

  const pockets = {
    [currencyFrom]: pocketFromValue - writeOffValue,
    [currencyTo]: pocketFToValue + receiveValue,
  };
  yield all([
    put(setPockets({ pockets })),
    put(getSuccessAction(EXCHANGE)),
  ]);
}

function* exchangeSuccess() {
  yield put(dropExchangeValues());
}

export default function* mainSaga() {
  yield all([
    yield takeEvery(getRequestAction(GET_POCKETS).type, getPockets),
    yield takeEvery(getRequestAction(GET_RATES).type, getRates),
    yield takeEvery(CHANGE_WRITE_OFF_VALUE, changeWriteOffValue),
    yield takeEvery(CHANGE_RECEIVE_VALUE, changeReceiveValue),
    yield takeEvery(getRequestAction(EXCHANGE).type, exchange),
    yield takeEvery(getSuccessAction(EXCHANGE).type, exchangeSuccess),
  ]);
}
