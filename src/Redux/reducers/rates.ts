import { Action, handleActions } from 'redux-actions';

import { SET_RATES } from 'Constants/actionNames';
import { CURRENCIES } from 'Constants';

type SetRatesPayload = {
  rates: {
    rates: {[id: string]: number};
    base: string;
    timestamp: string;
  };
}

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

export default handleActions(
  {
    [SET_RATES]: (state: RatesState, action: Action<SetRatesPayload>) => {
      const ratesValues: {[id: string]: number} = {};
      const { rates, base, timestamp } = action.payload.rates;
      CURRENCIES.forEach((currency) => {
        if (rates[currency]) {
          ratesValues[currency] = rates[currency];
        }
      });

      return { base, ratesValues, timestamp };
    },
  },
  defaultStore,
);
