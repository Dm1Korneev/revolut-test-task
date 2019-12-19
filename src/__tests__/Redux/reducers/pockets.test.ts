import reducer from 'Redux/reducers/pockets';
import * as actionNames from 'Constants/actionNames';

const defaultStore = {};

describe('pockets reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {
      type: 'INIT',
      payload: undefined,
    })).toStrictEqual(
      defaultStore,
    );
  });

  test('should handle SET_POCKETS', () => {
    const pockets = {
      GBP: 110.56,
      EUR: 213.00,
      USD: 100000.01,
    };

    const expectedResult = {
      GBP: 110.56,
      EUR: 213.00,
      USD: 100000.01,
    };

    expect(
      reducer(defaultStore, {
        type: actionNames.SET_POCKETS,
        payload: { pockets },
      }),
    ).toStrictEqual(expectedResult);
  });
});
