
import { PayloadAction } from '@reduxjs/toolkit';

type ErrorState = {[id: string]: string}

export default (state = {}, action: PayloadAction<any>): ErrorState => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'FAILURE' ? payload && payload.error : '',
  };
};
