import { CURRENCY_SYMBOLS } from 'Constants';

export const getCurrencySymbol = (currency) => CURRENCY_SYMBOLS[currency];

export const floorPlus = (x, n = 2) => {
  if (Number.isNaN(x)) return Number.NaN;
  if (Number.isNaN(n)) return x;

  const m = 10 ** n;

  return Math.floor(x * m) / m;
};

export const roundPlus = (x, n = 2) => {
  if (Number.isNaN(x)) return Number.NaN;
  if (Number.isNaN(n)) return x;

  const m = 10 ** n;

  return Math.round(x * m) / m;
};

