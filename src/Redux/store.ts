import createSagaMiddleware from 'redux-saga';
import { EnhancedStore, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import errorMiddleware from './middlewares/error';
import rootReducer, { StateType as StateTypeReducers } from './reducers';
import rootSaga from './sagas';

const storeFactory = (): EnhancedStore => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), errorMiddleware, sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default storeFactory;

export type StateType = StateTypeReducers;
