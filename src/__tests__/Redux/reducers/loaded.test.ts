import reducer from 'Redux/reducers/loaded';

describe('loaded reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined)).toStrictEqual(
      {},
    );
  });

  test('should not handle actions without SUCCESS postfix', () => {
    expect(
      reducer({}, {
        type: 'GET_RATES',
        payload: undefined,
      }),
    ).toStrictEqual(
      {},
    );
  });

  test('should handle GET_RATES_SUCCESS', () => {
    expect(
      reducer({ GET_RATES: true }, {
        type: 'GET_RATES_SUCCESS',
        payload: undefined,
      }),
    ).toStrictEqual(
      { GET_RATES: true },
    );
  });
});
