import { handleActions } from 'redux-actions';

import { SET_POCKETS } from 'Constants/actionNames';

const defaultStore = {};

export default handleActions(
  {
    [SET_POCKETS]: (state, action) => ({ ...state, ...action.payload.pockets }),
  },
  defaultStore,
);
