import reducer from 'Redux/reducers/rates';
import * as actionNames from 'Constants/actionNames';

const defaultStore = {
  base: null,
  ratesValues: {},
  timestamp: null,
};

describe('rates reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toStrictEqual(
      defaultStore,
    );
  });

  test('should handle SET_RATES', () => {
    const rates = {
      disclaimer: 'Usage subject to terms: https://openexchangerates.org/terms',
      license: 'https://openexchangerates.org/license',
      timestamp: 1576404028,
      base: 'USD',
      rates: {
        USD: 1,
        GBP: 0.750469,
        EUR: 0.89924,
        AUD: 1.453291,
        AWG: 1.8,
        AZN: 1.7025,
        BAM: 1.749636,
        BBD: 2,
      },
    };

    const expectedResult = {
      base: 'USD',
      ratesValues: {
        USD: 1,
        GBP: 0.750469,
        EUR: 0.89924,
      },
      timestamp: 1576404028,
    };

    expect(
      reducer(defaultStore, {
        type: actionNames.SET_RATES,
        payload: { rates },
      }),
    ).toStrictEqual(expectedResult);
  });
});
