import { createAction } from 'redux-actions';

import { getRequestAction } from 'Redux/shared';
import {
  GET_POCKETS, GET_RATES, SET_POCKETS, SET_RATES,
} from 'Constants/actionNames';

export const getRates = () => getRequestAction(GET_RATES);

export const setRates = createAction(SET_RATES);

export const getPockets = () => getRequestAction(GET_POCKETS);

export const setPockets = createAction(SET_POCKETS);
