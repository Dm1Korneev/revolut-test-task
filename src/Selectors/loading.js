import {
  GET_RATES,
} from 'Constants/actionNames';

export const getRatesLoadingSelector = (state) => !!state.loading[GET_RATES];
