import { createSelector } from 'reselect';

import { CURRENCIES } from 'Constants';

const pocketsSelector = (state) => state.pockets;

const exchangeSelector = (state) => state.exchange;

const ratesSelector = (state) => state.rates;

export const currenciesSelector = () => CURRENCIES;

export const ratesValuesSelector = (state) => createSelector(
  ratesSelector,
  (rates) => rates.ratesValues,
)(state);

export const pocketValueSelector = (state, currency) => createSelector(
  pocketsSelector,
  (pockets) => pockets[currency],
)(state);

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

export const rateSelector = (state, currencyFrom, currencyTo) => createSelector(
  ratesValuesSelector,
  (ratesValues) => ratesValues[currencyTo] / ratesValues[currencyFrom]
  ,
)(state);

export const exchagesValuesIsSetSelector = (state) => createSelector(
  [writeOffValueSelector, receiveValueSelector],
  (writeOffValue, receiveValue) => !!writeOffValue && !!receiveValue,
)(state);

export const currenciesFromToSameSelector = (state) => createSelector(
  [pocketFromCurrencySelector, pocketToCurrencySelector],
  (currencyFrom, currencyTo) => currencyFrom === currencyTo,
)(state);

