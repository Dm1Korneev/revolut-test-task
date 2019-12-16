import { createSelector } from 'reselect';

import { pocketValueSelector } from './pockets';

const exchangeSelector = (state) => state.exchange;

export const pocketFromCurrencySelector = (state) => createSelector(
  exchangeSelector,
  (exchange) => exchange.pocketFrom,
)(state);

export const pocketToCurrencySelector = (state) => createSelector(
  exchangeSelector,
  (exchange) => exchange.pocketTo,
)(state);

export const writeOffValueSelector = (state) => createSelector(
  exchangeSelector,
  (exchange) => exchange.writeOffValue,
)(state);

export const receiveValueSelector = (state) => createSelector(
  exchangeSelector,
  (exchange) => exchange.receiveValue,
)(state);

export const pocketFromValueSelector = (state) => createSelector(
  pocketFromCurrencySelector,
  (currency) => pocketValueSelector(state, currency),
)(state);

export const pocketToValueSelector = (state) => createSelector(
  pocketToCurrencySelector,
  (currency) => pocketValueSelector(state, currency),
)(state);

export const exchagesValuesIsSetSelector = (state) => createSelector(
  [writeOffValueSelector, receiveValueSelector],
  (writeOffValue, receiveValue) => !!writeOffValue && !!receiveValue,
)(state);

export const currenciesFromToSameSelector = (state) => createSelector(
  [pocketFromCurrencySelector, pocketToCurrencySelector],
  (currencyFrom, currencyTo) => currencyFrom === currencyTo,
)(state);

