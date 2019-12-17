import rootSaga from 'Redux/sagas';
import { all } from 'redux-saga/effects';
import mainSaga from 'Redux/sagas/mainSaga';

jest.mock('Redux/sagas/mainSaga', () => ({
  * default() {
    yield () => {};
  },
}));

describe('Root saga', () => {
  const gen = rootSaga();

  test('should start main saga', () => {
    expect(gen.next().value).toStrictEqual(all([
      mainSaga(),
    ]));
  });
});
