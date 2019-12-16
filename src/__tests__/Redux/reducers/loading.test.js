import reducer from 'Redux/reducers/loading';
import * as actionNames from 'Constants/actionNames';

const getFailureActionName = (actionName) => `${actionName}_FAILURE`;
const getRequestActionName = (actionName) => `${actionName}_REQUEST`;
const getSuccessActionName = (actionName) => `${actionName}_SUCCESS`;

describe('loading reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toStrictEqual(
      {},
    );
  });

  test('should not handle actions without REQUEST, SUCCESS FAILURE postfix', () => {
    expect(
      reducer({}, {
        type: actionNames.GET_RATES,
      }),
    ).toStrictEqual(
      {},
    );
  });

  test('should handle GET_RATES_REQUEST', () => {
    expect(
      reducer({}, {
        type: getRequestActionName(actionNames.GET_RATES),
      }),
    ).toStrictEqual(
      { GET_RATES: true },
    );
  });

  test('should handle GET_RATES_SUCCESS', () => {
    expect(
      reducer({ GET_RATES: true }, {
        type: getSuccessActionName(actionNames.GET_RATES),
      }),
    ).toStrictEqual(
      { GET_RATES: false },
    );
  });

  test('should handle GET_RATES_FAILURE', () => {
    expect(
      reducer({ GET_RATES: true }, {
        type: getFailureActionName(actionNames.GET_RATES),
      }),
    ).toStrictEqual(
      { GET_RATES: false },
    );
  });
});
