import * as actions from 'Redux/actions';
import * as actionNames from 'Constants/actionNames';

const getRequestActionName = (actionName) => `${actionName}_REQUEST`;

describe('actions', () => {
  test('should create an action to get rates', () => {
    const expectedAction = {
      type: getRequestActionName(actionNames.GET_RATES),
    };
    expect(actions.getRates()).toStrictEqual(expectedAction);
  });

  test('should create an action to get pockets', () => {
    const expectedAction = {
      type: getRequestActionName(actionNames.GET_POCKETS),
    };
    expect(actions.getPockets()).toStrictEqual(expectedAction);
  });

  test('should create an action to set pockets', () => {
    const expectedAction = {
      type: actionNames.SET_POCKETS,
    };
    expect(actions.setPockets()).toStrictEqual(expectedAction);
  });

  test('should create an action to set pocket from', () => {
    const expectedAction = {
      type: actionNames.SET_POCKET_FROM,
    };
    expect(actions.setPocketFrom()).toStrictEqual(expectedAction);
  });

  test('should create an action to set pocket to', () => {
    const expectedAction = {
      type: actionNames.SET_POCKET_TO,
    };
    expect(actions.setPocketTo()).toStrictEqual(expectedAction);
  });

  test('should create an action to change write off value', () => {
    const expectedAction = {
      type: actionNames.CHANGE_WRITE_OFF_VALUE,
    };
    expect(actions.changeWriteOffValue()).toStrictEqual(expectedAction);
  });

  test('should create an action to change receive value', () => {
    const expectedAction = {
      type: actionNames.CHANGE_RECEIVE_VALUE,
    };
    expect(actions.changeReceiveValue()).toStrictEqual(expectedAction);
  });

  test('should create an action to set write off value', () => {
    const expectedAction = {
      type: actionNames.SET_WRITE_OFF_VALUE,
    };
    expect(actions.setWriteOffValue()).toStrictEqual(expectedAction);
  });

  test('should create an action to set receive value', () => {
    const expectedAction = {
      type: actionNames.SET_RECEIVE_VALUE,
    };
    expect(actions.setReceiveValue()).toStrictEqual(expectedAction);
  });

  test('should create an action to drop exchange values', () => {
    const expectedAction = {
      type: actionNames.DROP_EXCHANGE_VALUES,
    };
    expect(actions.dropExchangeValues()).toStrictEqual(expectedAction);
  });

  test('should create an action to exchange', () => {
    const expectedAction = {
      type: getRequestActionName(actionNames.EXCHANGE),
    };
    expect(actions.exchange()).toStrictEqual(expectedAction);
  });
});
