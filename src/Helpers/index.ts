import { CURRENCY_SYMBOLS } from 'Constants';

export const getCurrencySymbol = (currency: string): string => CURRENCY_SYMBOLS[currency];

export const floorPlus = (value: number, decimals = 2): number => Number(
  `${Math.floor(
    Number(`${value}e${decimals}`),
  )}e-${decimals}`,
);

export const roundPlus = (value: number, decimals = 2): number => Number(
  `${Math.round(
    Number(`${value}e${decimals}`),
  )}e-${decimals}`,
);
