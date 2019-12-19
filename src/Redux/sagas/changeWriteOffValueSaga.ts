import {
  all, put, select,
} from 'redux-saga/effects';
import { Action } from 'redux-actions';
import {
  pocketFromCurrencySelector, pocketFromValueSelector, pocketToCurrencySelector,
} from 'Selectors/exchange';
import { rateSelector } from 'Selectors/rates';
import { roundPlus } from 'Helpers';
import { setReceiveValue, setWriteOffValue } from 'Redux/actions';

export default function* changeWriteOffValueSaga(action: Action<number>): Iterator<any> {
  const writeOffValue = action.payload;
  let receiveValue;
  if (writeOffValue === null) {
    receiveValue = null;
  } else {
    const pocketFromValue = yield select(pocketFromValueSelector);
    if (pocketFromValue < writeOffValue) {
      return;
    }

    const currencyFrom = yield select(pocketFromCurrencySelector);
    const currencyTo = yield select(pocketToCurrencySelector);
    const rate = yield select(rateSelector, currencyFrom, currencyTo);

    receiveValue = roundPlus(writeOffValue * rate);
  }

  yield all([
    put(setWriteOffValue(writeOffValue)),
    put(setReceiveValue(receiveValue)),
  ]);
}
