import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'Redux/reducers';
import rootSaga from 'Redux/sagas';

const storeFactory = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareEnhancer = applyMiddleware(sagaMiddleware);
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
