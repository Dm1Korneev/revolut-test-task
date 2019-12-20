import { Action } from '@reduxjs/toolkit';

export type LoadedState = {[id: string]: number}

export default function loadedReducer(state = {}, action: Action): LoadedState {
  if (!action) {
    return state;
  }

  const { type } = action;
  const matches = /(.*)_(SUCCESS)/.exec(type);

  if (!matches) return state;

  const [, requestName] = matches;
  return {
    ...state,
    [requestName]: true,
  };
}
