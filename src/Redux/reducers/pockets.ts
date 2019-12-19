import { Action, handleActions } from 'redux-actions';

import { SET_POCKETS } from 'Constants/actionNames';

const defaultStore = {};

export default handleActions(
  {
    [SET_POCKETS]: (state, action: Action<{pockets: object}>) => ({ ...state, ...action.payload.pockets }),
  },
  defaultStore,
);
