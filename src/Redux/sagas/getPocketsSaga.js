import { call, put } from 'redux-saga/effects';
import { getPockets as getPocketsApi } from 'API/requests';
import { getFailureAction, getSuccessAction } from 'Redux/shared';
import { setPockets } from 'Redux/actions';
import { GET_POCKETS } from 'Constants/actionNames';

export default function* getPocketsSaga() {
  try {
    const pockets = yield call(getPocketsApi);
    yield put(setPockets({ pockets }));
    yield put(getSuccessAction(GET_POCKETS, { pockets }));
  } catch (error) {
    yield put(getFailureAction(GET_POCKETS, { error }));
  }
}
