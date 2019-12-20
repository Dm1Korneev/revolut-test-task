import { createReducer } from '@reduxjs/toolkit';

import { CURRENCIES } from 'Constants';
import {
  changePockets, dropExchangeValues, setPocketFrom, setPocketTo, setReceiveValue, setWriteOffValue,
} from 'Redux/actions';

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

export default createReducer(defaultStore, (builder) => builder
  .addCase(setPocketFrom, (state, action) => ({ ...state, pocketFrom: action.payload }))
  .addCase(setPocketTo, (state, action) => ({ ...state, pocketTo: action.payload }))
  .addCase(setWriteOffValue, (state, action) => ({ ...state, writeOffValue: action.payload }))
  .addCase(setReceiveValue, (state, action) => ({ ...state, receiveValue: action.payload }))
  .addCase(dropExchangeValues, (state) => ({ ...state, writeOffValue: null, receiveValue: null }))
  .addCase(changePockets, (state) => ({ ...state, pocketFrom: state.pocketTo, pocketTo: state.pocketFrom })));
