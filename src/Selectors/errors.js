import { createSelector } from 'reselect';

const errorsSelector = (state) => state.errors;

export const errorSelector = (state, type) => createSelector(
  errorsSelector,
  (errors) => errors[type],
)(state);
