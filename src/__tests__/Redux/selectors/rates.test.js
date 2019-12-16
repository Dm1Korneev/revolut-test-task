import { rateSelector } from 'Selectors/rates';

describe('Rates selectors', () => {
  test('rateSelector should return rate 0.9375', () => {
    const store = {
      rates: {
        ratesValues: {
          EUR: 0.8,
          GBP: 0.75,
        },
      },
    };

    expect(rateSelector(store, 'EUR', 'GBP')).toStrictEqual(
      0.9375,
    );
  });
});
