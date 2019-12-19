import reducer from 'Redux/reducers/error';

describe('error reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {
      type: 'INIT',
      payload: undefined,
    })).toStrictEqual(
      {},
    );
  });

  test('should not handle actions without REQUEST or FAILURE postfix', () => {
    expect(
      reducer({}, {
        type: 'GET_RATES',
        payload: undefined,
      }),
    ).toStrictEqual(
      {},
    );
  });

  test('should handle GET_RATES_FAILURE', () => {
    expect(
      reducer({}, {
        type: 'GET_RATES_FAILURE',
        payload: { error: { message: 'TEST_MESSAGE' } },
      }),
    ).toStrictEqual(
      { GET_RATES: 'TEST_MESSAGE' },
    );
  });

  test('should handle GET_RATES_REQUEST', () => {
    expect(
      reducer({ GET_RATES: 'TEST_MESSAGE' }, {
        type: 'GET_RATES_REQUEST',
        payload: undefined,
      }),
    ).toStrictEqual(
      { GET_RATES: '' },
    );
  });
});
