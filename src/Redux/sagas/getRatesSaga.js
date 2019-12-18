import { call, put } from 'redux-saga/effects';
import { getRates as getRatesApi } from 'API/requests';
import { getFailureAction, getSuccessAction } from 'Redux/shared';
import { setRates } from 'Redux/actions';
import { GET_RATES } from 'Constants/actionNames';

export default function* getRatesSaga() {
  try {
    const rates = yield call(getRatesApi);
    yield put(getSuccessAction(GET_RATES, { rates }));
    yield put(setRates({ rates }));
  } catch (error) {
    yield put(getFailureAction(GET_RATES, { error }));
  }
}
