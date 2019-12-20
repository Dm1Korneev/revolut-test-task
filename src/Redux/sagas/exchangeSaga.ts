import { all, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { setPockets } from 'Redux/actions';
import { EXCHANGE } from 'Constants/actionNames';
import { getFailureAction, getSuccessAction } from 'Redux/shared';
import {
  pocketFromCurrencySelector, pocketFromValueSelector, pocketToCurrencySelector,
  pocketToValueSelector, writeOffValueSelector,
} from 'Selectors/exchange';
import { rateSelector } from 'Selectors/rates';
import { roundPlus } from 'Helpers';

export default function* exchangeSaga(): SagaIterator {
  try {
    const writeOffValue = writeOffValueSelector(yield select());
    if (!writeOffValue) {
      return;
    }
    const currencyFrom = pocketFromCurrencySelector(yield select());
    const currencyTo = pocketToCurrencySelector(yield select());
    if (currencyFrom === currencyTo) {
      throw new Error('Currencies from and to must be different');
    }

    const pocketFromValue = pocketFromValueSelector(yield select());
    const pocketFToValue = pocketToValueSelector(yield select());
    const rate = rateSelector(yield select(), currencyFrom, currencyTo);
    const receiveValue = roundPlus(writeOffValue * rate);

    const pockets = {
      [currencyFrom]: roundPlus((pocketFromValue * 100 - writeOffValue * 100) / 100),
      [currencyTo]: roundPlus((pocketFToValue * 100 + receiveValue * 100) / 100),
    };
    yield all([
      put(setPockets({ pockets })),
      put(getSuccessAction(EXCHANGE)()),
    ]);
  } catch (error) {
    yield put(getFailureAction(EXCHANGE)({ error }));
  }
}
