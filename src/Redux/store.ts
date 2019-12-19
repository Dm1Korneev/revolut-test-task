import { Store, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import errorMiddleware from './middlewares/error';
import rootReducer, { StateType as StateTypeReducers } from './reducers';
import rootSaga from './sagas';

const storeFactory = (): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareEnhancer = applyMiddleware(
    errorMiddleware,
    sagaMiddleware,
  );
  const composeEnhancers = process.env.NODE_ENV === 'production'
    ? middlewareEnhancer : composeWithDevTools(middlewareEnhancer);

  const store = createStore(
    rootReducer,
    composeEnhancers,
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default storeFactory;

export type StateType = StateTypeReducers;
