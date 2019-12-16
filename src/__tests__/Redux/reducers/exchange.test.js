import reducer from 'Redux/reducers/exchange';
import * as actionNames from 'Constants/actionNames';
import { CURRENCIES } from 'Constants';

const defaultStore = {
  pocketFrom: CURRENCIES[0],
  pocketTo: CURRENCIES[1],
  writeOffValue: null,
  receiveValue: null,
};

describe('exchange reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toStrictEqual(
      defaultStore,
    );
  });

  test('should handle SET_POCKET_FROM', () => {
    const expectedResult = {
      pocketFrom: 'EUR',
      pocketTo: CURRENCIES[1],
      writeOffValue: null,
      receiveValue: null,
    };

    expect(
      reducer(defaultStore, {
        type: actionNames.SET_POCKET_FROM,
        payload: 'EUR',
      }),
    ).toStrictEqual(expectedResult);
  });

  test('should handle SET_POCKET_TO', () => {
    const expectedResult = {
      pocketFrom: CURRENCIES[0],
      pocketTo: 'USD',
      writeOffValue: null,
      receiveValue: null,
    };

    expect(
      reducer(defaultStore, {
        type: actionNames.SET_POCKET_TO,
        payload: 'USD',
      }),
    ).toStrictEqual(expectedResult);
  });

  test('should handle SET_WRITE_OFF_VALUE', () => {
    const expectedResult = {
      pocketFrom: CURRENCIES[0],
      pocketTo: CURRENCIES[1],
      writeOffValue: 29.65,
      receiveValue: null,
    };

    expect(
      reducer(defaultStore, {
        type: actionNames.SET_WRITE_OFF_VALUE,
        payload: 29.65,
      }),
    ).toStrictEqual(expectedResult);
  });

  test('should handle SET_RECEIVE_VALUE', () => {
    const expectedResult = {
      pocketFrom: CURRENCIES[0],
      pocketTo: CURRENCIES[1],
      writeOffValue: null,
      receiveValue: 1000.54,
    };

    expect(
      reducer(defaultStore, {
        type: actionNames.SET_RECEIVE_VALUE,
        payload: 1000.54,
      }),
    ).toStrictEqual(expectedResult);
  });

  test('should handle DROP_EXCHANGE_VALUES', () => {
    const store = {
      pocketFrom: CURRENCIES[0],
      pocketTo: CURRENCIES[1],
      writeOffValue: 999.32,
      receiveValue: 0.43,
    };

    const expectedResult = {
      pocketFrom: CURRENCIES[0],
      pocketTo: CURRENCIES[1],
      writeOffValue: null,
      receiveValue: null,
    };

    expect(
      reducer(store, {
        type: actionNames.DROP_EXCHANGE_VALUES,
      }),
    ).toStrictEqual(expectedResult);
  });

  test('should handle CHANGE_POCKETS', () => {
    const store = {
      pocketFrom: 'USD',
      pocketTo: 'EUR',
      writeOffValue: null,
      receiveValue: null,
    };

    const expectedResult = {
      pocketFrom: 'EUR',
      pocketTo: 'USD',
      writeOffValue: null,
      receiveValue: null,
    };

    expect(
      reducer(store, {
        type: actionNames.CHANGE_POCKETS,
      }),
    ).toStrictEqual(expectedResult);
  });
});
