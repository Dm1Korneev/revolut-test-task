import { all, put, select } from 'redux-saga/effects';
import { setPockets } from 'Redux/actions';
import { EXCHANGE } from 'Constants/actionNames';
import { getFailureAction, getSuccessAction } from 'Redux/shared';
import {
  pocketFromCurrencySelector, pocketFromValueSelector, pocketToCurrencySelector,
  pocketToValueSelector, writeOffValueSelector,
} from 'Selectors/exchange';
import { rateSelector } from 'Selectors/rates';
import { roundPlus } from 'Helpers';

export default function* exchangeSaga(): Iterator<any> {
  try {
    const writeOffValue = yield select(writeOffValueSelector);
    const currencyFrom = yield select(pocketFromCurrencySelector);
    const currencyTo = yield select(pocketToCurrencySelector);
    if (currencyFrom === currencyTo) {
      throw new Error('Currencies from and to must be different');
    }

    const pocketFromValue = yield select(pocketFromValueSelector);
    const pocketFToValue = yield select(pocketToValueSelector);
    const rate = yield select(rateSelector, currencyFrom, currencyTo);
    const receiveValue = roundPlus(writeOffValue * rate);

    const pockets = {
      [currencyFrom]: (pocketFromValue * 100 - writeOffValue * 100) / 100,
      [currencyTo]: (pocketFToValue * 100 + receiveValue * 100) / 100,
    };
    yield all([
      put(setPockets({ pockets })),
      put(getSuccessAction(EXCHANGE)),
    ]);
  } catch (error) {
    yield put(getFailureAction(EXCHANGE, { error }));
  }
}
