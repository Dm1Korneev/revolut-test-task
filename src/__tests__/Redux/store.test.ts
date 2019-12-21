import storeFactory from 'Redux/store';
import * as ReduxSaga from 'redux-saga';
import * as ReduxToolkit from '@reduxjs/toolkit';

jest.mock('redux-saga');
const mockedCreateSagaMiddleware = jest.spyOn(ReduxSaga, 'default');
const run = jest.fn();
mockedCreateSagaMiddleware.mockReturnValue({ run } as any);

jest.mock('@reduxjs/toolkit', () => ({
  configureStore: jest.fn(() => ({ STORE: 'STORE' })),
  getDefaultMiddleware: jest.fn(() => []),
}));

jest.mock('@reduxjs/toolkit', () => ({
  configureStore: jest.fn(() => ({ STORE: 'STORE' })),
  getDefaultMiddleware: jest.fn(() => []),
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
    expect(mockedCreateSagaMiddleware).toHaveBeenCalledTimes(1);
  });

  test('should call getDefaultMiddleware', () => {
    storeFactory();
    expect(ReduxToolkit.getDefaultMiddleware).toHaveBeenCalledTimes(1);
  });

  test('should call configureStore', () => {
    storeFactory();
    expect(ReduxToolkit.configureStore).toHaveBeenCalledTimes(1);
  });

  test('should run root saga', () => {
    storeFactory();
    expect(run).toHaveBeenCalledWith({ SAGA: 'SAGA' });
  });
});
