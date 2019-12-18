import { combineReducers } from 'redux';

import loading from './loading';
import loaded from './loaded';
import errors from './error';
import rates from './rates';
import pockets from './pockets';
import exchange from './exchange';

export default combineReducers({
  loaded,
  loading,
  errors,
  rates,
  pockets,
  exchange,
});
