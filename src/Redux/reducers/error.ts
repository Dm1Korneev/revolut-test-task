import { Action } from 'redux-actions';

export type ErrorState = {[id: string]: string}

export default function loadingReducer(state = {}, action: Action<any>): ErrorState {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'FAILURE' ? payload && payload.error && payload.error.message : '',
  };
}
