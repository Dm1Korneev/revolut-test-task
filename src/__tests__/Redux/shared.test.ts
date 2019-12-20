import { getFailureAction, getRequestAction, getSuccessAction } from 'Redux/shared';

describe('shared', () => {
  test('should create get failure action', () => {
    const actionName = 'ACTION_NAME';
    const params = {
      test: 'test',
    };
    const expectedResult = {
      type: 'ACTION_NAME_FAILURE',
      payload: {
        test: 'test',
      },
    };
    expect(getFailureAction(actionName)(params)).toStrictEqual(expectedResult);
  });

  test('should create get request action', () => {
    const actionName = 'ACTION_NAME';
    const params = {
      test: 'test',
    };
    const expectedResult = {
      type: 'ACTION_NAME_REQUEST',
      payload: {
        test: 'test',
      },
    };
    expect(getRequestAction(actionName)(params)).toStrictEqual(expectedResult);
  });

  test('should create get success action', () => {
    const actionName = 'ACTION_NAME';
    const params = {
      test: 'test',
    };
    const expectedResult = {
      type: 'ACTION_NAME_SUCCESS',
      payload: {
        test: 'test',
      },
    };
    expect(getSuccessAction(actionName)(params)).toStrictEqual(expectedResult);
  });
});
