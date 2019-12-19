import { combineReducers } from 'redux';

import loading from './loading';
import loaded from './loaded';
import errors from './error';
import rates, { RatesState } from './rates';
import pockets from './pockets';
import exchange, { ExchangeState } from './exchange';

export default combineReducers({
  loaded,
  loading,
  errors,
  rates,
  pockets,
  exchange,
});

export type StateType = {
  exchange: ExchangeState;
  rates: RatesState;
}
