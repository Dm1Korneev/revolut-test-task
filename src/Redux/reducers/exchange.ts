import { Action, handleActions } from 'redux-actions';

import { CURRENCIES } from 'Constants';
import {
  CHANGE_POCKETS, DROP_EXCHANGE_VALUES, SET_POCKET_FROM, SET_POCKET_TO, SET_RECEIVE_VALUE, SET_WRITE_OFF_VALUE,
} from 'Constants/actionNames';

export type ExchangeState = {
  pocketFrom: string;
  pocketTo: string;
  writeOffValue: number | null;
  receiveValue: number | null;
}
const defaultStore: ExchangeState = {
  pocketFrom: CURRENCIES[0],
  pocketTo: CURRENCIES[1],
  writeOffValue: null,
  receiveValue: null,
};

export default handleActions(
  {
    [SET_POCKET_FROM]: (state: ExchangeState, action: Action<string>) => ({ ...state, pocketFrom: action.payload }),
    [SET_POCKET_TO]: (state: ExchangeState, action: Action<string>) => ({ ...state, pocketTo: action.payload }),
    [SET_WRITE_OFF_VALUE]: (state: ExchangeState, action: Action<number | null>) => ({ ...state, writeOffValue: action.payload }),
    [SET_RECEIVE_VALUE]: (state: ExchangeState, action: Action<number | null>) => ({ ...state, receiveValue: action.payload }),
    [DROP_EXCHANGE_VALUES]: (state: ExchangeState) => ({ ...state, writeOffValue: null, receiveValue: null }),
    [CHANGE_POCKETS]: (state: ExchangeState) => ({ ...state, pocketFrom: state.pocketTo, pocketTo: state.pocketFrom }),
  },
  defaultStore,
);
