import { createSelector } from '@reduxjs/toolkit';
import { StateType } from 'Redux/store';

const ratesSelector = (state: StateType): StateType['rates'] => state.rates;

const ratesValuesSelector = (state: StateType): {[id: string]: number} => createSelector(
  ratesSelector,
  (rates) => rates.ratesValues,
)(state);

export const rateSelector = (state: StateType, currencyFrom: string, currencyTo: string): number => createSelector(
  ratesValuesSelector,
  (ratesValues) => ratesValues[currencyTo] / ratesValues[currencyFrom]
  ,
)(state);
