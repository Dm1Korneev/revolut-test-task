import { createAction } from '@reduxjs/toolkit';

import { getRequestAction } from 'Redux/shared';
import {
  CHANGE_POCKETS, CHANGE_RECEIVE_VALUE, CHANGE_WRITE_OFF_VALUE, DROP_EXCHANGE_VALUES, EXCHANGE, GET_POCKETS,
  GET_RATES, SET_POCKETS, SET_POCKET_FROM, SET_POCKET_TO, SET_RATES, SET_RECEIVE_VALUE, SET_WRITE_OFF_VALUE,
} from 'Constants/actionNames';

export const getRates = getRequestAction(GET_RATES);

interface SetRates {
  rates: {
    rates: {[id: string]: number};
    timestamp: string;
    base: string;
  };
}
export const setRates = createAction<SetRates>(SET_RATES);

export const getPockets = getRequestAction(GET_POCKETS);

interface SetPockets {
  pockets: {[id: string]: number};
}
export const setPockets = createAction<SetPockets>(SET_POCKETS);

export const setPocketFrom = createAction<string>(SET_POCKET_FROM);

export const setPocketTo = createAction<string>(SET_POCKET_TO);

export const changeWriteOffValue = createAction<number | null>(CHANGE_WRITE_OFF_VALUE);

export const changeReceiveValue = createAction<number | null>(CHANGE_RECEIVE_VALUE);

export const setWriteOffValue = createAction<number | null>(SET_WRITE_OFF_VALUE);

export const setReceiveValue = createAction<number | null>(SET_RECEIVE_VALUE);

export const dropExchangeValues = createAction(DROP_EXCHANGE_VALUES);

export const exchange = getRequestAction(EXCHANGE);

export const changePockets = createAction(CHANGE_POCKETS);
