import { Action, createAction } from 'redux-actions';

import { getRequestAction } from 'Redux/shared';
import {
  CHANGE_POCKETS, CHANGE_RECEIVE_VALUE, CHANGE_WRITE_OFF_VALUE, DROP_EXCHANGE_VALUES, EXCHANGE, GET_POCKETS,
  GET_RATES, SET_POCKETS, SET_POCKET_FROM, SET_POCKET_TO, SET_RATES, SET_RECEIVE_VALUE, SET_WRITE_OFF_VALUE,
} from 'Constants/actionNames';

export const getRates = (): Action<any> => getRequestAction(GET_RATES);

export const setRates = createAction(SET_RATES);

export const getPockets = (): Action<any> => getRequestAction(GET_POCKETS);

export const setPockets = createAction(SET_POCKETS);

export const setPocketFrom = createAction(SET_POCKET_FROM);

export const setPocketTo = createAction(SET_POCKET_TO);

export const changeWriteOffValue = createAction(CHANGE_WRITE_OFF_VALUE);

export const changeReceiveValue = createAction(CHANGE_RECEIVE_VALUE);

export const setWriteOffValue = createAction(SET_WRITE_OFF_VALUE);

export const setReceiveValue = createAction(SET_RECEIVE_VALUE);

export const dropExchangeValues = createAction(DROP_EXCHANGE_VALUES);

export const exchange = (): Action<any> => getRequestAction(EXCHANGE);

export const changePockets = createAction(CHANGE_POCKETS);
