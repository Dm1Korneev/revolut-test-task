import {
  all, put, select,
} from 'redux-saga/effects';
import {
  pocketFromCurrencySelector, pocketFromValueSelector, pocketToCurrencySelector,
} from 'Selectors/exchange';
import { rateSelector } from 'Selectors/rates';
import { roundPlus } from 'Helpers';
import { setReceiveValue, setWriteOffValue } from 'Redux/actions';

export default function* changeReceiveValueSaga(action) {
  const receiveValue = action.payload;
  let writeOffValue;
  if (receiveValue === null) {
    writeOffValue = null;
  } else {
    const currencyFrom = yield select(pocketFromCurrencySelector);
    const currencyTo = yield select(pocketToCurrencySelector);
    const rate = yield select(rateSelector, currencyTo, currencyFrom);

    writeOffValue = roundPlus(receiveValue * rate);

    const pocketFromValue = yield select(pocketFromValueSelector);
    if (pocketFromValue < writeOffValue) {
      return;
    }
  }

  yield all([
    put(setWriteOffValue(writeOffValue)),
    put(setReceiveValue(receiveValue)),
  ]);
}
