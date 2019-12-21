import { call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { getPockets as getPocketsApi } from 'API/requests';
import { getFailureAction, getSuccessAction } from 'Redux/shared';
import { setPockets } from 'Redux/actions';
import { GET_POCKETS } from 'Constants/actionNames';

export default function* getPocketsSaga(): SagaIterator {
  try {
    const pockets = yield call(getPocketsApi);
    yield put(setPockets({ pockets }));
    yield put(getSuccessAction<object>(GET_POCKETS)({ pockets }));
  } catch (error) {
    yield put(getFailureAction<object>(GET_POCKETS)({ error }));
  }
}
