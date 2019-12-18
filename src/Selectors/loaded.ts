import {
  GET_RATES,
} from 'Constants/actionNames';

export const getRatesLoadedSelector = (state) => !!state.loaded[GET_RATES];
