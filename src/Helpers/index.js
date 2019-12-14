import { CURRENCY_SYMBOLS } from 'Constants';

export const getCurrencySymbol = (currency) => CURRENCY_SYMBOLS[currency];

export const floorPlus = (value, decimals = 2) => Number(`${Math.floor(`${value}e${decimals}`)}e-${decimals}`);

export const roundPlus = (value, decimals = 2) => Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);
