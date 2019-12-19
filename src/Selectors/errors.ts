import { createSelector } from 'reselect';
import { StateType } from 'Redux/store';

const errorsSelector = (state: StateType): StateType['errors'] => state.errors;

export const errorSelector = (state: StateType, type: string): string => createSelector(
  errorsSelector,
  (errors) => errors[type],
)(state);
