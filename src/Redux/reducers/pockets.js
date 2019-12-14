import { handleActions } from 'redux-actions';

import { SET_POCKETS } from 'Constants/actionNames';

const defaultStore = {};

export default handleActions(
  {
    [SET_POCKETS]: (state, action) => action.payload.pockets,
  },
  defaultStore,
);
