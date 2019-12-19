import {
  GET_RATES,
} from 'Constants/actionNames';
import { StateType } from 'Redux/store';

export const getRatesLoadedSelector = (state: StateType) => !!state.loaded[GET_RATES];
