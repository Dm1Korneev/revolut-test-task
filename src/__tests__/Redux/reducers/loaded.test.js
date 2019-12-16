import reducer from 'Redux/reducers/loaded';
import * as actionNames from 'Constants/actionNames';

const getSuccessActionName = (actionName) => `${actionName}_SUCCESS`;

describe('loaded reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toStrictEqual(
      {},
    );
  });

  test('should not handle actions without SUCCESS postfix', () => {
    expect(
      reducer({}, {
        type: actionNames.GET_RATES,
      }),
    ).toStrictEqual(
      {},
    );
  });

  test('should handle GET_RATES_SUCCESS', () => {
    expect(
      reducer({ GET_RATES: true }, {
        type: getSuccessActionName(actionNames.GET_RATES),
      }),
    ).toStrictEqual(
      { GET_RATES: true },
    );
  });
});
