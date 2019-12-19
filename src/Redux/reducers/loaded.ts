import { Action } from 'redux-actions';

export type LoadedState = {[id: string]: number}

export default function loadedReducer(state = {}, action: Action<any>): LoadedState {
  const { type } = action;
  const matches = /(.*)_(SUCCESS)/.exec(type);

  if (!matches) return state;

  const [, requestName] = matches;
  return {
    ...state,
    [requestName]: true,
  };
}
