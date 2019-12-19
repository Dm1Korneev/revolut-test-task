import { createSelector } from 'reselect';
import {
  GET_RATES,
} from 'Constants/actionNames';
import { StateType } from 'Redux/store';

const loadedSelector = (state: StateType): StateType['loaded'] => state.loaded;

export const getRatesLoadedSelector = (state: StateType): boolean => createSelector(
  loadedSelector,
  (loaded) => !!loaded[GET_RATES],
)(state);

