import { combineReducers } from '@reduxjs/toolkit';

import loading from './loading';
import loaded from './loaded';
import errors from './error';
import rates from './rates';
import pockets from './pockets';
import exchange from './exchange';

const rootReducer = combineReducers({
  loaded,
  loading,
  errors,
  rates,
  pockets,
  exchange,
});
export default rootReducer;

export type StateType = ReturnType<typeof rootReducer>
