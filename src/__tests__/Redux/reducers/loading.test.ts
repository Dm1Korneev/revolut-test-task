import reducer from 'Redux/reducers/loading';

describe('loading reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {
      type: 'INIT',
      payload: undefined,
    })).toStrictEqual(
      {},
    );
  });

  test('should not handle actions without REQUEST, SUCCESS FAILURE postfix', () => {
    expect(
      reducer({}, {
        type: 'GET_RATES',
        payload: undefined,
      }),
    ).toStrictEqual(
      {},
    );
  });

  test('should handle GET_RATES_REQUEST', () => {
    expect(
      reducer({}, {
        type: 'GET_RATES_REQUEST',
        payload: undefined,
      }),
    ).toStrictEqual(
      { GET_RATES: true },
    );
  });

  test('should handle GET_RATES_SUCCESS', () => {
    expect(
      reducer({ GET_RATES: true }, {
        type: 'GET_RATES_SUCCESS',
        payload: undefined,
      }),
    ).toStrictEqual(
      { GET_RATES: false },
    );
  });

  test('should handle GET_RATES_FAILURE', () => {
    expect(
      reducer({ GET_RATES: true }, {
        type: 'GET_RATES_FAILURE',
        payload: undefined,
      }),
    ).toStrictEqual(
      { GET_RATES: false },
    );
  });
});
