import { Dispatch } from 'redux';
import { PayloadAction } from '@reduxjs/toolkit';

export default () => (next: Dispatch) => (action: PayloadAction<any>): PayloadAction<any> => {
  if (action.payload && action.payload.error) {
    console.warn('[Error Middleware error]:', action.payload.error); /* eslint-disable-line no-console */
  }

  return next(action);
};

