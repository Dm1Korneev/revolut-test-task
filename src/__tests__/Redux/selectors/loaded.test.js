import { getRatesLoadedSelector } from 'Selectors/loaded';
import {
  GET_RATES,
} from 'Constants/actionNames';

describe('loaded selectors', () => {
  test('getRatesLoadedSelector should return true when rates are loaded', () => {
    const store = {
      loaded: {
        [GET_RATES]: true,
      },
    };

    expect(getRatesLoadedSelector(store)).toStrictEqual(
      true,
    );
  });

  test('getRatesLoadedSelector should return false when rates are not loaded', () => {
    const store = {
      loaded: {},
    };

    expect(getRatesLoadedSelector(store)).toStrictEqual(
      false,
    );
  });
});
