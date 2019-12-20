import { Action } from '@reduxjs/toolkit';

export type LoadingState = {[id: string]: number}

export default function loadingReducer(state = {}, action: Action): LoadingState {
  if (!action) {
    return state;
  }

  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'REQUEST',
  };
}
