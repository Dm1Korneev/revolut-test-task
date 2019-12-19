import { createSelector } from 'reselect';
import { StateType } from 'Redux/store';

import { pocketValueSelector } from './pockets';

const exchangeSelector = (state: StateType): StateType['exchange'] => state.exchange;

export const pocketFromCurrencySelector = (state: StateType): string => createSelector(
  exchangeSelector,
  (exchange) => exchange.pocketFrom,
)(state);

export const pocketToCurrencySelector = (state: StateType): string => createSelector(
  exchangeSelector,
  (exchange) => exchange.pocketTo,
)(state);

export const writeOffValueSelector = (state: StateType): number | null => createSelector(
  exchangeSelector,
  (exchange) => exchange.writeOffValue,
)(state);

export const receiveValueSelector = (state: StateType): number | null => createSelector(
  exchangeSelector,
  (exchange) => exchange.receiveValue,
)(state);

export const pocketFromValueSelector = (state: StateType): number => createSelector(
  pocketFromCurrencySelector,
  (currency) => pocketValueSelector(state, currency),
)(state);

export const pocketToValueSelector = (state: StateType): number => createSelector(
  pocketToCurrencySelector,
  (currency) => pocketValueSelector(state, currency),
)(state);

export const exchagesValuesIsSetSelector = (state: StateType): boolean => createSelector(
  [writeOffValueSelector, receiveValueSelector],
  (writeOffValue, receiveValue) => !!writeOffValue && !!receiveValue,
)(state);

export const currenciesFromToSameSelector = (state: StateType): boolean => createSelector(
  [pocketFromCurrencySelector, pocketToCurrencySelector],
  (currencyFrom, currencyTo) => currencyFrom === currencyTo,
)(state);

