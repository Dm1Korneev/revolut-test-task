import {
  all, put, select,
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { Action } from 'redux-actions';
import {
  pocketFromCurrencySelector, pocketFromValueSelector, pocketToCurrencySelector,
} from 'Selectors/exchange';
import { rateSelector } from 'Selectors/rates';
import { roundPlus } from 'Helpers';
import { setReceiveValue, setWriteOffValue } from 'Redux/actions';

export default function* changeReceiveValueSaga(action: Action<number>): SagaIterator {
  const receiveValue = action.payload;
  let writeOffValue;
  if (receiveValue === null) {
    writeOffValue = null;
  } else {
    const currencyFrom = pocketFromCurrencySelector(yield select());
    const currencyTo = pocketToCurrencySelector(yield select());
    const rate = yield select(rateSelector, currencyTo, currencyFrom);

    writeOffValue = roundPlus(receiveValue * rate);

    const pocketFromValue = pocketFromValueSelector(yield select());
    if (pocketFromValue < writeOffValue) {
      return;
    }
  }

  yield all([
    put(setWriteOffValue(writeOffValue)),
    put(setReceiveValue(receiveValue)),
  ]);
}
