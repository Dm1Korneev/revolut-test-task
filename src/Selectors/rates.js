import { createSelector } from 'reselect';

const ratesSelector = (state) => state.rates;

const ratesValuesSelector = (state) => createSelector(
  ratesSelector,
  (rates) => rates.ratesValues,
)(state);

export const rateSelector = (state, currencyFrom, currencyTo) => createSelector(
  ratesValuesSelector,
  (ratesValues) => ratesValues[currencyTo] / ratesValues[currencyFrom]
  ,
)(state);
