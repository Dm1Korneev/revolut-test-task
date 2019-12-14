import { handleActions } from 'redux-actions';

import { CURRENCIES } from 'Constants';
import {
  DROP_EXCHANGE_VALUES, SET_POCKET_FROM, SET_POCKET_TO, SET_RECEIVE_VALUE, SET_WRITE_OFF_VALUE,
} from 'Constants/actionNames';

const defaultStore = {
  pocketFrom: CURRENCIES[0],
  pocketTo: CURRENCIES[1],
  writeOffValue: null,
  receiveValue: null,
};

export default handleActions(
  {
    [SET_POCKET_FROM]: (state, action) => ({ ...state, pocketFrom: action.payload }),
    [SET_POCKET_TO]: (state, action) => ({ ...state, pocketTo: action.payload }),
    [SET_WRITE_OFF_VALUE]: (state, action) => ({ ...state, writeOffValue: action.payload }),
    [SET_RECEIVE_VALUE]: (state, action) => ({ ...state, receiveValue: action.payload }),
    [DROP_EXCHANGE_VALUES]: (state) => ({ ...state, writeOffValue: null, receiveValue: null }),
  },
  defaultStore,
);
