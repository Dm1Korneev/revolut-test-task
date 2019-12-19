import { Dispatch } from 'redux';
import { Action } from 'redux-actions';

export default () => (next: Dispatch) => (action: Action<any>): Action<any> => {
  if (action.payload && action.payload.error) {
    console.warn('[Error Middleware error]:', action.payload.error); /* eslint-disable-line no-console */
  }

  return next(action);
};

