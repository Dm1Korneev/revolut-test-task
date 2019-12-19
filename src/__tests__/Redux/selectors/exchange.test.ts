import {
  currenciesFromToSameSelector,
  exchagesValuesIsSetSelector,
  pocketFromCurrencySelector,
  pocketFromValueSelector,
  pocketToCurrencySelector,
  pocketToValueSelector,
  receiveValueSelector,
  writeOffValueSelector,
} from 'Selectors/exchange';

describe('Exchange selectors', () => {
  const defaultStore = {
    pockets: {
      EUR: 100.56,
      GBP: 200.00,
      USD: 300.99,
    },
    exchange: {
      pocketFrom: 'USD',
      pocketTo: 'EUR',
      writeOffValue: 0,
      receiveValue: 0,
    },
  };

  test('currenciesFromToSameSelector should return true when currencies is same', () => {
    const store = {
      exchange: {
        ...defaultStore.exchange,
        pocketFrom: 'USD',
        pocketTo: 'USD',
      },
    };

    expect(currenciesFromToSameSelector(store)).toStrictEqual(
      true,
    );
  });

  test('currenciesFromToSameSelector should return false when currencies is not same', () => {
    const store = {
      exchange: {
        ...defaultStore.exchange,
        pocketFrom: 'USD',
        pocketTo: 'EUR',
      },
    };

    expect(currenciesFromToSameSelector(store)).toStrictEqual(
      false,
    );
  });

  test('exchagesValuesIsSetSelector should return true when both values is set', () => {
    const store = {
      exchange: {
        ...defaultStore.exchange,
        writeOffValue: 100,
        receiveValue: 20,
      },
    };

    expect(exchagesValuesIsSetSelector(store)).toStrictEqual(
      true,
    );
  });

  test('exchagesValuesIsSetSelector should return false when both values is not set', () => {
    const store = {
      exchange: {
        ...defaultStore.exchange,
        writeOffValue: 0,
        receiveValue: 0,
      },
    };

    expect(exchagesValuesIsSetSelector(store)).toStrictEqual(
      false,
    );
  });

  test('exchagesValuesIsSetSelector should return false when one value is not set', () => {
    const store = {
      exchange: {
        ...defaultStore.exchange,
        writeOffValue: 100,
        receiveValue: null,
      },
    };

    expect(exchagesValuesIsSetSelector(store)).toStrictEqual(
      false,
    );
  });

  test('pocketFromCurrencySelector should return pocket from currency', () => {
    const store = {
      exchange: {
        ...defaultStore.exchange,
      },
    };

    expect(pocketFromCurrencySelector(store)).toStrictEqual(
      'USD',
    );
  });

  test('pocketToCurrencySelector should return pocket to currency', () => {
    const store = {
      exchange: {
        ...defaultStore.exchange,
      },
    };

    expect(pocketToCurrencySelector(store)).toStrictEqual(
      'EUR',
    );
  });

  test('pocketFromValueSelector should return pocket from value', () => {
    expect(pocketFromValueSelector(defaultStore)).toStrictEqual(
      300.99,
    );
  });

  test('pocketToValueSelector should return pocket to value', () => {
    expect(pocketToValueSelector(defaultStore)).toStrictEqual(
      100.56,
    );
  });

  test('receiveValueSelector should return receive value', () => {
    const store = {
      exchange: {
        ...defaultStore.exchange,
        receiveValue: 99.99,
      },
    };

    expect(receiveValueSelector(store)).toStrictEqual(
      99.99,
    );
  });

  test('writeOffValueSelector should return write off  value', () => {
    const store = {
      exchange: {
        ...defaultStore.exchange,
        writeOffValue: 10.65,
      },
    };

    expect(writeOffValueSelector(store)).toStrictEqual(
      10.65,
    );
  });
});
