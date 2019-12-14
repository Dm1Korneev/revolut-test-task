import { combineReducers } from 'redux';

import loading from './loading';
import errors from './error';
import rates from './rates';
import pockets from './pockets';
import exchange from './exchange';

export default combineReducers({
  loading,
  errors,
  rates,
  pockets,
  exchange,
});
