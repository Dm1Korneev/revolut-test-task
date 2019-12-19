
import { mocked } from 'ts-jest/utils';
import storeFactory from 'Redux/store';
import createSagaMiddleware from 'redux-saga';
import * as Redux from 'redux';

jest.mock('redux-saga');
mocked(createSagaMiddleware).mockImplementation(() => ({
  run: jest.fn(),
}));

jest.mock('redux', () => ({
  applyMiddleware: jest.fn(),
  createStore: jest.fn(() => ({ STORE: 'STORE' })),
}));

jest.mock('Redux/reducers', () => ({
  default: jest.fn(),
}));

jest.mock('redux-devtools-extension', () => ({
  composeWithDevTools: jest.fn(),
}));

jest.mock('Redux/sagas', () => ({ SAGA: 'SAGA' }));

describe('Store', () => {
  beforeEach(() => jest.clearAllMocks());

  test('should return object', () => {
    expect(storeFactory()).toStrictEqual({ STORE: 'STORE' });
  });

  test('should call createSagaMiddleware', () => {
    storeFactory();
    expect(createSagaMiddleware).toHaveBeenCalledTimes(1);
  });

  test('should call applyMiddleware', () => {
    storeFactory();
    expect(Redux.applyMiddleware).toHaveBeenCalledTimes(1);
  });

  test('should call createStore', () => {
    storeFactory();
    expect(Redux.createStore).toHaveBeenCalledTimes(1);
  });

  test('should run root saga', () => {
    const run = jest.fn();
    mocked(createSagaMiddleware).mockImplementationOnce(() => ({
      run,
    }));

    storeFactory();
    expect(run).toHaveBeenCalledWith({ SAGA: 'SAGA' });
  });
});
