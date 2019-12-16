import reducer from 'Redux/reducers/error';
import * as actionNames from 'Constants/actionNames';

const getFailureActionName = (actionName) => `${actionName}_FAILURE`;
const getRequestActionName = (actionName) => `${actionName}_REQUEST`;

describe('error reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toStrictEqual(
      {},
    );
  });

  test('should not handle actions without REQUEST or FAILURE postfix', () => {
    expect(
      reducer({}, {
        type: actionNames.GET_RATES,
      }),
    ).toStrictEqual(
      {},
    );
  });

  test('should handle GET_RATES_FAILURE', () => {
    expect(
      reducer({}, {
        type: getFailureActionName(actionNames.GET_RATES),
        payload: { error: { message: 'TEST_MESSAGE' } },
      }),
    ).toStrictEqual(
      { GET_RATES: 'TEST_MESSAGE' },
    );
  });

  test('should handle GET_RATES_REQUEST', () => {
    expect(
      reducer({ GET_RATES: 'TEST_MESSAGE' }, {
        type: getRequestActionName(actionNames.GET_RATES),
      }),
    ).toStrictEqual(
      { GET_RATES: '' },
    );
  });
});
