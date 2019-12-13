import { combineReducers } from 'redux';
import loading from './loading';
import errors from './error';

export default combineReducers({
  loading,
  errors,
});
