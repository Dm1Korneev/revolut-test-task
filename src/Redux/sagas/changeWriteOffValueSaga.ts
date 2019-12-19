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

export default function* changeWriteOffValueSaga(action: Action<number>): SagaIterator {
  const writeOffValue = action.payload;
  let receiveValue;
  if (writeOffValue === null) {
    receiveValue = null;
  } else {
    const pocketFromValue = pocketFromValueSelector(yield select());
    if (pocketFromValue < writeOffValue) {
      return;
    }

    const currencyFrom = pocketFromCurrencySelector(yield select());
    const currencyTo = pocketToCurrencySelector(yield select());
    const rate = rateSelector(yield select(), currencyFrom, currencyTo);

    receiveValue = roundPlus(writeOffValue * rate);
  }

  yield all([
    put(setWriteOffValue(writeOffValue)),
    put(setReceiveValue(receiveValue)),
  ]);
}
