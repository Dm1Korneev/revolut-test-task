import { handleActions } from 'redux-actions';

import { SET_RATES } from 'Constants/actionNames';
import { CURRENCIES } from 'Constants';

const defaultStore = {
  base: null,
  ratesValues: {},
  timestamp: null,
};

export default handleActions(
  {
    [SET_RATES]: (state, action) => {
      const ratesValues = {};
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
