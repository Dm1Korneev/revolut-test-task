import { Action, handleActions } from 'redux-actions';

import { SET_POCKETS } from 'Constants/actionNames';

export type PocketsState = {[id: string]: number}

const defaultStore: PocketsState = {};

export default handleActions<PocketsState, any>(
  {
    [SET_POCKETS]: (state: PocketsState, action: Action<{pockets: object}>) => ({ ...state, ...action.payload.pockets }),
  },
  defaultStore,
);
