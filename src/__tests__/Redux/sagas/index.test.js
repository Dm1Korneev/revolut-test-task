import rootSaga from 'Redux/sagas';
import { all } from 'redux-saga/effects';

jest.mock('Redux/sagas/mainSaga', () => () => 'mainSaga');

describe('Root saga', () => {
  const gen = rootSaga();
  test('should start main saga', () => {
    expect(gen.next().value).toStrictEqual(all([
      'mainSaga',
    ]));
  });
});
