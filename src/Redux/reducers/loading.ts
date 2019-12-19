import { Action } from 'redux-actions';

export type LoadingState = {[id: string]: number}

export default function loadingReducer(state = {}, action: Action<any>): LoadingState {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'REQUEST',
  };
}
