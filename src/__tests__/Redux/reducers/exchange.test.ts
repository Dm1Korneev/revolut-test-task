import reducer from 'Redux/reducers/exchange';

const GBP = 'GBP';
const EUR = 'EUR';
const USD = 'USD';

const defaultStore = {
  pocketFrom: GBP,
  pocketTo: EUR,
  writeOffValue: null,
  receiveValue: null,
};

describe('exchange reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {
      type: 'INIT',
      payload: undefined,
    })).toStrictEqual(
      defaultStore,
    );
  });

  test('should handle SET_POCKET_FROM', () => {
    const expectedResult = {
      pocketFrom: EUR,
      pocketTo: EUR,
      writeOffValue: null,
      receiveValue: null,
    };

    expect(
      reducer(defaultStore, {
        type: 'SET_POCKET_FROM',
        payload: EUR,
      }),
    ).toStrictEqual(expectedResult);
  });

  test('should handle SET_POCKET_TO', () => {
    const expectedResult = {
      pocketFrom: GBP,
      pocketTo: USD,
      writeOffValue: null,
      receiveValue: null,
    };

    expect(
      reducer(defaultStore, {
        type: 'SET_POCKET_TO',
        payload: USD,
      }),
    ).toStrictEqual(expectedResult);
  });

  test('should handle SET_WRITE_OFF_VALUE', () => {
    const expectedResult = {
      pocketFrom: GBP,
      pocketTo: EUR,
      writeOffValue: 29.65,
      receiveValue: null,
    };

    expect(
      reducer(defaultStore, {
        type: 'SET_WRITE_OFF_VALUE',
        payload: 29.65,
      }),
    ).toStrictEqual(expectedResult);
  });

  test('should handle SET_RECEIVE_VALUE', () => {
    const expectedResult = {
      pocketFrom: GBP,
      pocketTo: EUR,
      writeOffValue: null,
      receiveValue: 1000.54,
    };

    expect(
      reducer(defaultStore, {
        type: 'SET_RECEIVE_VALUE',
        payload: 1000.54,
      }),
    ).toStrictEqual(expectedResult);
  });

  test('should handle DROP_EXCHANGE_VALUES', () => {
    const store = {
      pocketFrom: GBP,
      pocketTo: EUR,
      writeOffValue: 999.32,
      receiveValue: 0.43,
    };

    const expectedResult = {
      pocketFrom: GBP,
      pocketTo: EUR,
      writeOffValue: null,
      receiveValue: null,
    };

    expect(
      reducer(store, {
        type: 'DROP_EXCHANGE_VALUES',
        payload: undefined,
      }),
    ).toStrictEqual(expectedResult);
  });

  test('should handle CHANGE_POCKETS', () => {
    const store = {
      pocketFrom: USD,
      pocketTo: EUR,
      writeOffValue: null,
      receiveValue: null,
    };

    const expectedResult = {
      pocketFrom: EUR,
      pocketTo: USD,
      writeOffValue: null,
      receiveValue: null,
    };

    expect(
      reducer(store, {
        type: 'CHANGE_POCKETS',
        payload: undefined,
      }),
    ).toStrictEqual(expectedResult);
  });
});
