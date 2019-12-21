import { Dispatch } from 'redux';
import { PayloadAction } from '@reduxjs/toolkit';

export default () => (next: Dispatch) => <P extends {error: string}>(action: PayloadAction<P>): PayloadAction<P> => {
  if (action.payload && action.payload.error) {
    console.warn('[Error Middleware error]:', action.payload.error); /* eslint-disable-line no-console */
  }

  return next(action);
};

