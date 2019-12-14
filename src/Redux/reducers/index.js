import { combineReducers } from 'redux';

import loading from './loading';
import errors from './error';
import rates from './rates';
import pockets from './pockets';

export default combineReducers({
  loading,
  errors,
  rates,
  pockets,
});
