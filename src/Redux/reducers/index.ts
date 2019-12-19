import { combineReducers } from 'redux';

import loading, { LoadingState } from './loading';
import loaded, { LoadedState } from './loaded';
import errors, { ErrorState } from './error';
import rates, { RatesState } from './rates';
import pockets, { PocketsState } from './pockets';
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
  loaded: LoadedState;
  loading: LoadingState;
  errors: ErrorState;
  rates: RatesState;
  exchange: ExchangeState;
  pockets: PocketsState;
}
