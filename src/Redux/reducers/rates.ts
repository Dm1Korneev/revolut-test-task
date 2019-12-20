import { createReducer } from '@reduxjs/toolkit';

import { setRates } from 'Redux/actions';
import { CURRENCIES } from 'Constants';

export type RatesState = {
  base: string | null;
  ratesValues: {[id: string]: number};
  timestamp: string | null;
}
const defaultStore: RatesState = {
  base: null,
  ratesValues: {},
  timestamp: null,
};

export default createReducer(defaultStore, (builder) => builder
  .addCase(setRates, (state, action) => {
    const ratesValues: {[id: string]: number} = {};
    const { rates, base, timestamp } = action.payload.rates;
    CURRENCIES.forEach((currency) => {
      if (rates[currency]) {
        ratesValues[currency] = rates[currency];
      }
    });

    return {
      base, ratesValues, timestamp,
    };
  }));
