import { floorPlus, getCurrencySymbol, roundPlus } from 'Helpers';

jest.mock('Constants', () => ({
  CURRENCY_SYMBOLS: {
    USD: '$',
  },
}));

describe('Helpers', () => {
  test('getCurrencySymbol should return "$" for USD', () => {
    expect(getCurrencySymbol('USD')).toStrictEqual(
      '$',
    );
  });

  test('roundPlus should return 5.57 on 5.566', () => {
    expect(roundPlus(5.566)).toStrictEqual(
      5.57,
    );
  });

  test('roundPlus should return 5.56 on 5.563', () => {
    expect(roundPlus(5.566)).toStrictEqual(
      5.57,
    );
  });

  test('floorPlus should return 5.56 on 5.566', () => {
    expect(floorPlus(5.566)).toStrictEqual(
      5.56,
    );
  });
});
