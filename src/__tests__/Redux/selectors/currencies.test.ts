import { currenciesSelector } from 'Selectors/currencies';

import { CURRENCIES } from 'Constants';

describe('Currencies selectors', () => {
  test('currenciesSelector should return array of the currencies', () => {
    expect(currenciesSelector()).toStrictEqual(
      CURRENCIES,
    );
  });
});
